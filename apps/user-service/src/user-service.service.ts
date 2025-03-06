import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServiceService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
