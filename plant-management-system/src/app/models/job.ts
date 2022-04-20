import { Worker } from "./worker"

export interface Job {
    id: number
    name: string
    munkas: Worker
}