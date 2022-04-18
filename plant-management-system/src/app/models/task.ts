import { Job } from "./job"


export interface Task {
    id: number
    name: string
    machine: string
    munka: Job
}