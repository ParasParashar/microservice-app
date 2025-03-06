import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
    @ApiProperty({ description: 'id' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: ' Name' })
    @Column()
    username: string;

    @ApiProperty({ description: 'email' })
    @Column()
    email: string;
}
