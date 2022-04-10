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

  @ManyToOne(type => Worker, worker => worker.jobs)
  @JoinColumn()
  worker: Worker;

  @OneToMany((type) => Task, (task) => task.job) // egy munkához tartozhat több feladat is
  tasks: Task[];

  // INSERT INTO `job` (`id`, `name`, `workerId`) VALUES (1, 'M1', '1')
}
