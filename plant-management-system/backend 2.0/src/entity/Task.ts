import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Job } from "./Job";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    machine: string;

    @ManyToOne(type => Job, {
        eager: true, 
        cascade: true 
    })
    job: Job

    // INSERT INTO `task` (`id`, `name`, `machine`, `jobId`) VALUES (1, 'esztergálás', 'esztergáló', 1);
}