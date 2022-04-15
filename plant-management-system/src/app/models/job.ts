export interface Job {
    id: number
    name: string
    worker: Worker
    task: Task[]
}