import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.USER_DB_HOST || 'localhost',
      port: 3306,
      username: process.env.USER_DB_USERNAME || 'root',
      password: process.env.USER_DB_PASSWORD || '',
      database: process.env.USER_DB_NAME || 'user_db',
      entities: [Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Order]),
  ],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule { }
