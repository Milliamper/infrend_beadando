import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Job } from "./Job";

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


    @OneToMany((type) => Job, (job) => job.worker) // egy munkához tartozhat több feladat is
  jobs: Job[];



    //INSERT INTO `worker` (`id`, `name`, `qualification`, `hourly_wage`, `status`) VALUES (1, 'Szalai Márton', 'esztergályos', 2000, 'szabad')

}