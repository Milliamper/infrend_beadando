import { getRepository } from "typeorm";
import { Worker } from "../entity/Worker";
import { Controller } from "./controller";

export class WorkerController extends Controller{
    repository = getRepository(Worker) // úgy kap értéket, hogy meghívjuk a typeORM getRepository függvényét

    getAll = async (req, res) => {
        const search = req.query.search || '' // search változó elérése. || '' means that ha a search mező üres

        try {
          const entities = await this.repository
          .createQueryBuilder('worker') // ezzel lesz önálló lekérdezés
          .where("status LIKE CONCAT('%', :search, '%')", { search: search })
          .getMany(); // ténylegesen elküldjük a lekérdezést
          res.json(entities) 
        } catch (error) {
          console.error(error);
          this.handleError(res); 
        }
      };
}