import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool, QueryResult } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool | null = null;

  async onModuleInit() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.warn('DATABASE_URL is missing. API database routes will return 503.');
      return;
    }

    this.pool = new Pool({
      connectionString: databaseUrl,
      ssl: { rejectUnauthorized: false },
    });

    try {
      await this.ensureSchema();
      console.log('Database schema initialization successful.');
    } catch (error) {
      console.error('Cannot initialize database schema:', error);
    }
  }

  async onModuleDestroy() {
    if (this.pool) {
      await this.pool.end();
    }
  }

  getPool(): Pool | null {
    return this.pool;
  }

  async query<T extends any = any>(text: string, params?: any[]): Promise<QueryResult<T>> {
    if (!this.pool) {
      throw new Error('DATABASE_URL chưa được cấu hình. Hãy đặt Neon PostgreSQL connection string rồi chạy lại server.');
    }
    return this.pool.query<T>(text, params);
  }

  private async ensureSchema() {
    if (!this.pool) return;
    await this.pool.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;');
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        role TEXT NOT NULL DEFAULT 'student',
        is_active BOOLEAN NOT NULL DEFAULT TRUE,
        current_level TEXT NOT NULL DEFAULT 'HSK2',
        is_premium BOOLEAN NOT NULL DEFAULT FALSE,
        premium_until TIMESTAMPTZ,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        last_login_at TIMESTAMPTZ
      );
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS current_level TEXT NOT NULL DEFAULT 'HSK2';
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE;
    `);
    await this.pool.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS premium_until TIMESTAMPTZ;
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS payment_orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        plan_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        transfer_code TEXT NOT NULL UNIQUE,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        paid_at TIMESTAMPTZ,
        expires_at TIMESTAMPTZ NOT NULL
      );
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payment_orders_user_id ON payment_orders(user_id);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payment_orders_transfer_code ON payment_orders(transfer_code);
    `);
    await this.pool.query(`
      CREATE INDEX IF NOT EXISTS idx_payment_orders_status ON payment_orders(status);
    `);
    await this.pool.query(`
      CREATE TABLE IF NOT EXISTS sepay_webhook_events (
        sepay_id BIGINT PRIMARY KEY,
        order_id UUID REFERENCES payment_orders(id) ON DELETE SET NULL,
        payload JSONB NOT NULL,
        processed BOOLEAN NOT NULL DEFAULT FALSE,
        received_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `);
  }
}
