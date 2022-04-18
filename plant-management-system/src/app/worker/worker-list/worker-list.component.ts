import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Job } from 'src/app/models/job';
import { Worker } from 'src/app/models/worker';
import { JobService } from 'src/app/services/job.service';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css'],
})
export class WorkerListComponent implements OnInit {
  tableHeaders = ['#', 'Név', 'Szakképzettség', 'Órabér', 'Státusz', 'Törlés', 'Módosítás'];

  /*@Input() worker!: Worker; // egy terméket vár bemenetként, erről fog infókat megjeleníteni

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToWorkerFormForEditing(id:number) {
    this.router.navigate(['/product-form'], {
      queryParams: {
        id: id,
      },
    });
  }*/

  
  workers: Worker[] = [];
  workers2: Worker[] = []

  constructor(private workerService: WorkerService, private router: Router, private jobService: JobService) {}

  async ngOnInit() {
    // itt lesz az a logika amivel a termékeket betöltjük, de csak a komponens inicializálása után, és elhelyezzük a products adattagban
    // azért kell az await, mert a loadProduct egy aszinkron művelet, vagyis amíg ez végrehajtódik, más kódok és végrehajtásra kerülhetnek
    this.workers = await this.workerService.loadWorkers()
  }



  async deleteWorker(id: number) {
    await this.workerService.deleteWorker(id)
    this.workers = await this.workerService.loadWorkers()
  }

  navigateToWorkerFormForEditing(id: number) {
    this.router.navigate(['/worker-form'], {
      queryParams: {
        id: id,
      },
    });
  }
}
