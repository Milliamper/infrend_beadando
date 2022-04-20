import { getRepository } from 'typeorm';
import { Machine } from '../entity/Machine';
import { Controller } from './controller';

export class MachineController extends Controller {
  repository = getRepository(Machine); // úgy kap értéket, hogy meghívjuk a typeORM getRepository függvényét
}
