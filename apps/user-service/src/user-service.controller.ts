import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) { }

  @MessagePattern({ cmd: 'get_users' })
  async getAllUsers() {
    console.log('user get all users from the db by message pattern')
    return await this.userServiceService.findAll();
  }

  // to create the user when we recive the create event from the user
  @MessagePattern('create_user')
  async create(user: any) {
    const d = await this.userServiceService.create(user);
    return {
      message: 'User created successfully',
      data: d
    }
  }
}
