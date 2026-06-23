import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { PaymentPlansService } from '../payment/payment-plans.service';
import { ContentService } from '../content/content.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly db: DatabaseService,
    private readonly paymentPlansService: PaymentPlansService,
    private readonly contentService: ContentService,
  ) {}

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
      plan: isPremium ? 'PREMIUM' : 'FREE',
      premiumUntil: row.premium_until,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      lastLoginAt: row.last_login_at,
    };
  }

  async isAdminRequest(headers: Record<string, string | string[] | undefined>): Promise<boolean> {
    const adminUserId = headers['x-admin-user-id'];
    const userId = Array.isArray(adminUserId) ? adminUserId[0] : adminUserId;
    if (!userId) return false;

    const result = await this.db.query(
      'SELECT role, is_active FROM users WHERE id = $1',
      [userId],
    );
    const user = result.rows[0];
    return user?.role === 'admin' && user?.is_active === true;
  }

  private async assertAdmin(headers: Record<string, string | string[] | undefined>) {
    if (!(await this.isAdminRequest(headers))) {
      throw new HttpException('Vui lòng đăng nhập bằng tài khoản admin.', HttpStatus.UNAUTHORIZED);
    }
  }

  async getAllUsers(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);

    try {
      const result = await this.db.query(
        `SELECT id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, created_at, updated_at, last_login_at
         FROM users
         ORDER BY created_at DESC`,
      );
      return { users: result.rows.map((row) => this.publicUser(row)) };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async updateUser(
    id: string,
    body: { fullName: string; email: string; role: string; isActive: boolean; currentLevel?: string },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);

    const fullName = String(body.fullName || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const role = String(body.role || 'student').trim();
    const isActive = body.isActive === true;
    const currentLevel = String(body.currentLevel || 'HSK2').trim().toUpperCase();

    if (!fullName || !email) {
      throw new HttpException('Tên và email không được để trống.', HttpStatus.BAD_REQUEST);
    }

    try {
      const result = await this.db.query(
        `UPDATE users
         SET full_name = $1, email = $2, role = $3, is_active = $4, current_level = $5, updated_at = NOW()
         WHERE id = $6
         RETURNING id, full_name, email, role, is_active, current_level, avatar_url, is_premium, premium_until, created_at, updated_at, last_login_at`,
        [fullName, email, role, isActive, currentLevel, id],
      );
      if (!result.rows[0]) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { user: this.publicUser(result.rows[0]) };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async deleteUser(
    id: string,
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);

    try {
      const result = await this.db.query('DELETE FROM users WHERE id = $1', [id]);
      if (result.rowCount === 0) {
        throw new HttpException('Không tìm thấy user.', HttpStatus.NOT_FOUND);
      }
      return { ok: true };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAllPlans(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const plans = await this.paymentPlansService.listAllPlans();
      return { plans };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getPlanStats(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const stats = await this.paymentPlansService.getAdminStats();
      return { stats };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createPlan(body: any, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    return this.paymentPlansService.createPlan(body);
  }

  async updatePlan(id: string, body: any, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    return this.paymentPlansService.updatePlan(id, body);
  }

  async deletePlan(id: string, headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    return this.paymentPlansService.deletePlan(id);
  }

  async getHskLessonLocks(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const locks = await this.contentService.listLocks();
      return { locks };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async saveHskLessonLocks(
    body: {
      lessons?: Array<{
        lessonId: string;
        level: string;
        lessonNo?: number;
        titleVi?: string;
        freeItemLimit?: number;
        lockedForFree?: boolean;
      }>;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);
    try {
      return await this.contentService.saveLocks(body.lessons || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getDailyThemeLocks(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const locks = await this.contentService.listDailyLocks();
      return { locks };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async saveDailyThemeLocks(
    body: {
      themes?: Array<{
        themeId: string;
        titleVi?: string;
        sortOrder?: number;
        freeItemLimit?: number;
        lockedForFree?: boolean;
      }>;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);
    try {
      return await this.contentService.saveDailyLocks(body.themes || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getHskLevelCovers(headers: Record<string, string | string[] | undefined>) {
    await this.assertAdmin(headers);
    try {
      const covers = await this.contentService.listHskLevelCovers();
      return { covers };
    } catch (error: any) {
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async saveHskLevelCovers(
    body: {
      covers?: Array<{
        level: string;
        coverUrl?: string;
      }>;
    },
    headers: Record<string, string | string[] | undefined>,
  ) {
    await this.assertAdmin(headers);
    try {
      return await this.contentService.saveHskLevelCovers(body.covers || []);
    } catch (error: any) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(error.message || 'Lỗi server.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
