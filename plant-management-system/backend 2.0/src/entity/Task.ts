import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import { Job } from './Job';
import { Machine } from './Machine';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @ManyToOne((type) => Machine, {
    eager: true,
    cascade: true,
    nullable: true,
    onDelete: 'CASCADE'
  })
  gep: Machine;

  @ManyToOne((type) => Job, {
    eager: true,
    cascade: true,
    nullable: true,
    onDelete: 'CASCADE'
  })
  munka: Job;
}
