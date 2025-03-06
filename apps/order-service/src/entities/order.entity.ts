import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Order {
    @ApiProperty({ description: 'id' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: ' productid' })
    @Column()
    productId: Number;

    @ApiProperty({ description: 'userid' })
    @Column()
    userId: Number;
}
