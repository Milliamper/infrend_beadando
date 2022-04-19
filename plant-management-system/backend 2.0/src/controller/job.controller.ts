import { getRepository } from 'typeorm';
import { Job } from '../entity/Job';
import { Controller } from './controller';

export class JobController extends Controller {
  repository = getRepository(Job); // úgy kap értéket, hogy meghívjuk a typeORM getRepository függvényét
}
