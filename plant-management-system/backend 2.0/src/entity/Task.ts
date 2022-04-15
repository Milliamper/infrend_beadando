import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Job } from "./Job";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    machine: string;

    @OneToMany((type) => Job, (job) => job.tasks) // egy munkához tartozhat több feladat is
    jobs: Job[];

    // INSERT INTO `task` (`id`, `name`, `machine`, `jobId`) VALUES (1, 'esztergálás', 'esztergáló', 1);
}