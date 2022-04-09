import { Router } from "express";
import { WorkerController } from "./controller/worker-controller";

export function getRouter() {
    const router = Router()

    const workerController = new WorkerController()

    router.get('/workers', workerController.getAll);
    //router.get('/users/:id', userController.getOne);
    //router.post('/users', userController.create);
    //router.put('/users', userController.update);
    //router.delete('/users/:id', userController.delete);

    return router
}