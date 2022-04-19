import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Task } from './Task';
import { Worker } from './Worker';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @OneToMany(() => Task, (task) => task.munka) // 1 munkához több task tartozhat
  feladatok: Task[];

  @ManyToOne((type) => Worker, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  munkas: Worker;

  // INSERT INTO `job` (`id`, `name`, `workerId`) VALUES (1, 'M1', '1')
}
