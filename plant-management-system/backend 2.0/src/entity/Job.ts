import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Task } from './Task';
import { Worker } from './Worker';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => Worker, {
    eager: true,
    cascade: true,
  })
  worker: Worker;

  @ManyToOne((type) => Task, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  tasks: Task[];

  // INSERT INTO `job` (`id`, `name`, `workerId`) VALUES (1, 'M1', '1')
}
