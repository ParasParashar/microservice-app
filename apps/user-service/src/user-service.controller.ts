import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) { }

  @MessagePattern({ cmd: 'get_all_users' })
  async getAllUsers() {
    return await this.userServiceService.findAll();
  }
}
