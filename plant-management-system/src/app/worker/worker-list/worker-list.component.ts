import { Component, OnInit } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css'],
})
export class WorkerListComponent implements OnInit {
  tableHeaders = ['#', 'Név', 'Szakképzettség', 'Órabér', 'Státusz', 'Törlés'];

  workers: Worker[] = [];

  constructor(private workerService: WorkerService) {}

  async ngOnInit() {
    // itt lesz az a logika amivel a termékeket betöltjük, de csak a komponens inicializálása után, és elhelyezzük a products adattagban
    // azért kell az await, mert a loadProduct egy aszinkron művelet, vagyis amíg ez végrehajtódik, más kódok és végrehajtásra kerülhetnek
    this.workers = await this.workerService.loadWorkers();
  }

  async deleteWorker(id: number) {
    await this.workerService.deleteWorker(id)
    this.workers = await this.workerService.loadWorkers()
  }
}
