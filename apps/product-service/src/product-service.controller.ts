import { Controller, Get } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductServiceController {
  constructor(private readonly productServiceService: ProductServiceService) { }

  @MessagePattern({ cmd: 'get_products' })
  getProducts() {
    console.log('get Products');
    return this.productServiceService.findAll();
  }

  // event receive from the gateway that user come then i want to create product in typeORM
  @EventPattern('create_product')
  async handleCreateProductEvent(data: any) {
    console.log('evenet result from the main app to the product', data);
    await this.productServiceService.create(data);
  }
}
