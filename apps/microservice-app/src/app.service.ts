import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class AppService {

  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
    @Inject('ANALYTICS_SERVICE') private readonly analyticsClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) { }

  async getProducts() {
    const products = this.productClient
      .send({ cmd: 'get_products' }, {})
    console.log(products, 'data of the event from the product service')
    return products;
  }
  async getUsers() {
    const products = this.userClient
      .send({ cmd: 'get_users' }, {})
    return products;
  }
}
