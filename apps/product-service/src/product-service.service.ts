import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductServiceService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }
  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(data: any) {
    return this.productRepository.save(data);
  }
}
