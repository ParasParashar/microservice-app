import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
    @ApiProperty({ example: 1 })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Product Name' })
    @Column()
    name: string;

    @ApiProperty({ example: 100 })
    @Column('decimal')
    price: number;
}
