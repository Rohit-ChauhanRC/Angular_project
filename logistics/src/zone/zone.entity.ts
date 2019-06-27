import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_group')
export class Zone {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    state:string;

}
