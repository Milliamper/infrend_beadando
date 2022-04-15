import { Job } from "./job"

export interface Worker {
    id: number
    name: string
    qualification: string
    hourly_wage: number
    status: string
    job: Job
}