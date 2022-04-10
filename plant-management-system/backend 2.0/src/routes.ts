import { Router } from "express";
import { JobController } from "./controller/job.controller";
import { TaskController } from "./controller/task.controller";
import { WorkerController } from "./controller/worker.controller";


export function getRouter() {
    const router = Router()

    const workerController = new WorkerController()
    const taskController = new TaskController()
    const jobController = new JobController()

    router.get('/workers', workerController.getAll);
    router.post('/workers', workerController.create);
    router.put('/workers', workerController.update);
    router.delete('/workers/:id', workerController.delete);

    router.get('/tasks', taskController.getAll);
    router.post('/tasks', taskController.create);
    router.put('/tasks', taskController.update);
    router.delete('/tasks/:id', taskController.delete);

    router.get('/jobs', jobController.getAll);
    router.post('/jobs', jobController.create);
    router.put('/jobs', jobController.update);
    router.delete('/jobs/:id', jobController.delete);

    return router
}

