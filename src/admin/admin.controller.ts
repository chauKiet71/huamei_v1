import { Controller, Get, Patch, Delete, Body, Param, Headers } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin/users')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getAllUsers(
    @Headers() headers: Record<string, string>
  ) {
    return this.adminService.getAllUsers(headers);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: any,
    @Headers() headers: Record<string, string>
  ) {
    return this.adminService.updateUser(id, body, headers);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id') id: string,
    @Headers() headers: Record<string, string>
  ) {
    return this.adminService.deleteUser(id, headers);
  }
}
