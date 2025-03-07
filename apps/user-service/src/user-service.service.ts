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

  // to find all the users in the repository
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  // to create the user
  async create(d: any) {
    console.log('inm the user service', d)
    return this.userRepository.save(d);
  }

}
