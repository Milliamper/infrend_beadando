import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

}