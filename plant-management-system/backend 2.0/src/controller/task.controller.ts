import { getRepository } from "typeorm";
import { Task } from "../entity/Task";
import { Controller } from "./controller";

export class TaskController extends Controller{
    repository = getRepository(Task) // úgy kap értéket, hogy meghívjuk a typeORM getRepository függvényét
}