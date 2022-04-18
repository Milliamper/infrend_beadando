import { async } from 'rxjs';
import { Repository } from 'typeorm';

// controller ami alapvető funkciókat támogat. létrehoz entitást, le lehet kérdezni az összes recordot, csak egyet id alapján, módosítani, vagy törölni
export abstract class Controller {
  // ebből majd leszármaztatunk konkrét entitásokhoz tartozó kontrollereket
  // önmagában nem lesz példányosítható, ezért abstract

  repository: Repository<any>;

  // kontroller az entitások létrehozásához
  create = async (req, res) => {
    
  
    // entitás hozzáadása az adatbázishoz
    try {
        const entity = this.repository.create(req.body); // az entitás a kérés törzsében érkezik. Ebből csinálunk egy typeorm entitást
      const entityAdded = await this.repository.save(entity); //aszinkron fv, ezért await. Visszatér azzal a recorddal amit a db-hez hozzáadtunk
      res.json(entityAdded);
    } catch (error) {
      console.error(error);
      this.handleError(res); // hibaüzenetet visszaküldjük a kliensnek
    }
  };

  // össszes record lekérdezése
  getAll = async (req, res) => {
    try {
      const entities = await this.repository.find(); // feltétel nélkül minden értéket visszaad
      res.json(entities) // recordok visszaküldése a kliensnek
    } catch (error) {
      console.error(error);
      this.handleError(res); // hibaüzenetet visszaküldjük a kliensnek
    }
  };

  getOne = async (req, res) => {
    const entityId = req.params.id;

    try {
        const entity = await this.repository.findOne(entityId);

        if (!entity) {
            return res.status(404).json({ message: 'Entity not found.' });
        }

        res.json(entity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

  // put-nak felelnek meg kb
  update = this.create;

  delete = async (req, res) => {
    try {
      const id = req.params.id;
      const entity = await this.repository.findOne();

      if (!entity) {
        this.handleError(res, 404, 'No entity found');
      }

      await this.repository.delete(entity);
      res.json({ succes: true });
    } catch (error) {
        console.error(error);
        this.handleError(res);
    }
  };

  // hibakezelés minden controller esetében ua, ezért kezelhető külön függvényben
  handleError = (res, status = 500, message = 'Server error') => {
    // megfelelő statuskód használatával visszaküld egy hibaüzenetet a kliensnek
    res.status(status).json({ message });
  };
}
