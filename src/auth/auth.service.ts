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
         RETURNING id, full_name, email, role, is_active, current_level, is_premium, premium_until, created_at, updated_at, last_login_at`,
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
       RETURNING id, full_name, email, role, is_active, current_level, is_premium, premium_until, created_at, updated_at, last_login_at`,
      [user.id],
    );
    return { user: this.publicUser(updated.rows[0]) };
  }
}
