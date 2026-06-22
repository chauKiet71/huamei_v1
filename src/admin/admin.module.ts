import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminPlansController } from './admin-plans.controller';
import { AdminService } from './admin.service';
import { PaymentModule } from '../payment/payment.module';

@Module({
  imports: [PaymentModule],
  controllers: [AdminController, AdminPlansController],
  providers: [AdminService],
})
export class AdminModule {}
