import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Task } from './Task';
import { Worker } from './Worker';


@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Worker, worker => worker.job) // egy felhasználóhoz tartozhat több termék is
  job: Job[]

  @ManyToMany(() => Task, (task) => task.job, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  tasks: Task[];

  /*@OneToMany(() => Task, tasks => tasks.job)
  @JoinTable() // egy munkához tartozhat több feladat is
  tasks: Task[];*/

  // INSERT INTO `job` (`id`, `name`, `workerId`) VALUES (1, 'M1', '1')
}
