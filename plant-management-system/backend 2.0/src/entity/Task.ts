import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Job } from './Job';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  machine: string;

  @ManyToOne((type) => Job, {
    eager: true,
    cascade: true,
    nullable: true,
  })
  munka: Job;

  // INSERT INTO `task` (`id`, `name`, `machine`, `jobId`) VALUES (1, 'esztergálás', 'esztergáló', 1);
}
