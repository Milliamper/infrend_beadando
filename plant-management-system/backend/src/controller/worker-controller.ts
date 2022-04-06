import { Worker } from '../entity/Worker';
import { getRepository } from 'typeorm';
import { Controller } from './controller';

export class WorkerController extends Controller{
  repostiory = getRepository(Worker);
}

//INSERT INTO `worker` (`id`, `name`, `qualification`, `hourly_wage`, `status`) VALUES (1, 'Szalai Márton', 'esztergályos', 2000, 'szabad')