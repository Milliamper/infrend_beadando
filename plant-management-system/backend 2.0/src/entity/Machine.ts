import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm';
import { Task } from './Task';

@Entity()
export class Machine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    status: string;

    @OneToMany(() => Task, task => task.gep) // 1 munkáshoz tartozhat több munka is
    feladat: Task[];
}