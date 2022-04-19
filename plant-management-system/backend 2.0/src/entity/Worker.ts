import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  ManyToMany,
  ManyToOne,
  JoinTable,
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

  //INSERT INTO `worker` (`id`, `name`, `qualification`, `hourly_wage`, `status`) VALUES (1, 'Szalai Márton', 'esztergályos', 2000, 'szabad')
}
