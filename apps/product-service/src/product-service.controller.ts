import { Controller, Get } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductServiceController {
  constructor(private readonly productServiceService: ProductServiceService) { }

  @MessagePattern({ cmd: 'getProducts' })
  getProducts() {
    return this.productServiceService.findAll();
  }
}
