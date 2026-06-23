import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(private readonly db: DatabaseService) {}

  hashPassword(password: string, salt: string = crypto.randomBytes(16).toString('hex')): string {
    const hash = crypto.pbkdf2Sync(password, salt, 120000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
  }

  verifyPassword(password: string, storedHash: string): boolean {
    const [salt, hash] = String(storedHash || '').split(':');
    if (!salt || !hash) return false;
    const expected = Buffer.from(this.hashPassword(password, salt));
    const actual = Buffer.from(storedHash);
    return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
  }

  publicUser(row: any) {
    const premiumUntil = row.premium_until ? new Date(row.premium_until) : null;
    const isPremium = Boolean(
      row.is_premium && (!premiumUntil || premiumUntil.getTime() > Date.now()),
    );
    return {
      id: row.id,
      fullName: row.full_name,
      email: row.email,
      role: row.role,
      isActive: row.is_active,
      currentLevel: row.current_level || 'HSK2',
      avatarUrl: row.avatar_url || '',
      isPremium,
      premiumUntil: row.premium_until || null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      lastLoginAt: row.last_login_at,
    };
  }

  async register(fullName: string, email: string, password: string) {
    if (fullName.length < 2) {
      throw new HttpException('Vui lòng nhập họ và tên.', HttpStatus.BAD_REQUEST);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new HttpException('Email không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (password.length < 6) {
      throw new HttpException('Mật khẩu cần tối thiểu 6 ký tự.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `INSERT INTO users (full_name, email, password_hash)
         VALUES ($1, $2, $3)
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, created_at, updated_at, last_login_at`,
        [fullName, email, this.hashPassword(password)],
      );
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new HttpException('Email này đã được đăng ký.', HttpStatus.CONFLICT);
      }
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async login(email: string, password: string) {
    let result;
    try {
      result = await this.db.query('SELECT * FROM users WHERE email = $1', [email]);
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi cơ sở dữ liệu.', HttpStatus.SERVICE_UNAVAILABLE);
    }

    const user = result.rows[0];
    if (!user || !this.verifyPassword(password, user.password_hash)) {
      throw new HttpException('Email hoặc mật khẩu không đúng.', HttpStatus.UNAUTHORIZED);
    }
    if (!user.is_active) {
      throw new HttpException('Tài khoản đã bị khóa.', HttpStatus.FORBIDDEN);
    }

    const updated = await this.db.query(
      `UPDATE users SET last_login_at = NOW(), updated_at = NOW()
       WHERE id = $1
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, created_at, updated_at, last_login_at`,
      [user.id],
    );
    return { user: this.publicUser(updated.rows[0]) };
  }

  private signCloudinaryParams(params: Record<string, string | number>, apiSecret: string): string {
    const payload = Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null && value !== '')
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return crypto.createHash('sha1').update(`${payload}${apiSecret}`).digest('hex');
  }

  private async uploadAvatarToCloudinary(userId: string, avatarDataUrl: string): Promise<string> {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME || '';
    const apiKey = process.env.CLOUDINARY_API_KEY || '';
    const apiSecret = process.env.CLOUDINARY_API_SECRET || '';
    const folder = process.env.CLOUDINARY_AVATAR_FOLDER || 'huamei/avatars';

    if (!cloudName || !apiKey || !apiSecret) {
      throw new HttpException('Cloudinary chưa được cấu hình trên server.', HttpStatus.SERVICE_UNAVAILABLE);
    }
    if (!String(avatarDataUrl || '').startsWith('data:image/')) {
      throw new HttpException('Ảnh đại diện không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (avatarDataUrl.length > 600000) {
      throw new HttpException('Ảnh đại diện quá lớn. Vui lòng chọn ảnh nhỏ hơn.', HttpStatus.PAYLOAD_TOO_LARGE);
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const params = {
      folder,
      overwrite: 'true',
      public_id: `user-${userId}`,
      timestamp,
    };
    const form = new FormData();
    form.append('file', avatarDataUrl);
    form.append('api_key', apiKey);
    Object.entries(params).forEach(([key, value]) => form.append(key, String(value)));
    form.append('signature', this.signCloudinaryParams(params, apiSecret));

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: form,
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.secure_url) {
      throw new HttpException(
        data.error?.message || 'Không thể tải ảnh lên Cloudinary.',
        response.status || HttpStatus.BAD_GATEWAY,
      );
    }
    return data.secure_url;
  }

  async updateOwnProfile(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    const headerValue = headers['x-user-id'];
    const requesterId = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    if (!requesterId || requesterId !== id) {
      throw new HttpException('Bạn không có quyền cập nhật hồ sơ này.', HttpStatus.FORBIDDEN);
    }

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();
    const avatarUrl = String(body.avatarUrl || '').trim();

    if (fullName.length < 2) {
      throw new HttpException('Vui lòng nhập họ và tên.', HttpStatus.BAD_REQUEST);
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new HttpException('Email không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (
      avatarUrl &&
      !avatarUrl.startsWith('data:image/') &&
      !/^https?:\/\//i.test(avatarUrl) &&
      !avatarUrl.startsWith('assets/')
    ) {
      throw new HttpException('Ảnh đại diện không hợp lệ.', HttpStatus.BAD_REQUEST);
    }
    if (avatarUrl.length > 600000) {
      throw new HttpException('Ảnh đại diện quá lớn. Vui lòng chọn ảnh nhỏ hơn.', HttpStatus.PAYLOAD_TOO_LARGE);
    }

    try {
      const result = await this.db.query(
        `UPDATE users
         SET full_name = $1, email = $2, current_level = $3, avatar_url = $4, updated_at = NOW()
         WHERE id = $5
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, created_at, updated_at, last_login_at`,
        [fullName, email, currentLevel, avatarUrl || null, id],
      );
      if (!result.rows[0]) {
        throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
      }
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new HttpException('Email này đã được đăng ký.', HttpStatus.CONFLICT);
      }
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateOwnAvatar(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    const headerValue = headers['x-user-id'];
    const requesterId = Array.isArray(headerValue) ? headerValue[0] : headerValue;
    if (!requesterId || requesterId !== id) {
      throw new HttpException('Bạn không có quyền cập nhật hồ sơ này.', HttpStatus.FORBIDDEN);
    }

    const avatarUrl = await this.uploadAvatarToCloudinary(id, String(body.avatarDataUrl || body.avatarUrl || ''));
    const result = await this.db.query(
      `UPDATE users
       SET avatar_url = $1, updated_at = NOW()
       WHERE id = $2
       RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, created_at, updated_at, last_login_at`,
      [avatarUrl, id],
    );
    if (!result.rows[0]) {
      throw new HttpException('Không tìm thấy tài khoản.', HttpStatus.NOT_FOUND);
    }
    return { user: this.publicUser(result.rows[0]), avatarUrl };
  }
}
