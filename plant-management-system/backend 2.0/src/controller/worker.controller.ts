import { getRepository } from 'typeorm';
import { Worker } from '../entity/Worker';
import { Controller } from './controller';

export class WorkerController extends Controller {
  repository = getRepository(Worker); // úgy kap értéket, hogy meghívjuk a typeORM getRepository függvényét
}
