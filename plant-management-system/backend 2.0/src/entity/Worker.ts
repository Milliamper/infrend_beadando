import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from 'typeorm';
import { Job } from './Job';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  qualification: string;

  @Column({ nullable: true })
  hourly_wage: number;

  @Column({ nullable: true })
  status: string;

  @OneToMany(() => Job, job => job.munkas) // 1 munkáshoz tartozhat több munka is
  munkak: Job[];
}
