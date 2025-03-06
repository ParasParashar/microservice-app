import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderServiceService } from './order-service.service';

@Controller()
export class OrderServiceController {
  constructor(private readonly orderServiceService: OrderServiceService) { }
  @MessagePattern({ cmd: 'get_all_orders' })
  async getAllUsers() {
    return await this.orderServiceService.findAll();
  }
}

