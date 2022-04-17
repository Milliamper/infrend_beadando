import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Job } from './Job';

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  qualification: string;

  @Column()
  hourly_wage: number;

  @Column()
  status: string;

  @ManyToOne((type) => Job, {
    eager: true, // ha lekérdezünk egy vagy több terméket, akkor a termék objektumban automatikusan benne lesz a hozzá tartozó felhasználó
    cascade: true, // ha hozzáadunk egy új terméket, és hozzáadunk egy új usert is, akkor ez a kapcsolat automatikusan mentésre kerül
  })
  job: Job;

  //INSERT INTO `worker` (`id`, `name`, `qualification`, `hourly_wage`, `status`) VALUES (1, 'Szalai Márton', 'esztergályos', 2000, 'szabad')
}
