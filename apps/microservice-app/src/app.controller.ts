import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { ApiProperty } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('PRODUCT_SERVICE') private readonly productServiceClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy
  ) { }

  @ApiProperty({ description: "First event from the main to create a product" })
  @Get('products')
  async getProducts() {
    this.productServiceClient.emit('create_product', { name: 'product-3', price: 553 });
    return this.appService.getProducts();
  }

  @ApiProperty({ description: "First event from the main to create a user" })
  @Get('users/create')
  async getUsers() {
    await this.userServiceClient.send('create_user', { username: 'Paras', email: 'paras@gmail.com' });
    return this.appService.getUsers();
  }
}
