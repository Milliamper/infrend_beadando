import { Job } from "./job"
import { Machine } from "./machine"

export interface Task {
    id: number
    name: string
    gep: Machine
    munka: Job
}