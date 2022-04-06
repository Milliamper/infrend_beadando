import { Component, OnInit } from '@angular/core';
import { Worker } from '../models/worker';
import { MainPageService } from '../services/main-page.service';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  id = 1

  tableHeaders = ['#' ,'Név', 'Szakképzettség', 'Órabér', 'Státusz']

  workers: Worker[] = []


  constructor(private workerService: WorkerService) { }

  async ngOnInit() { // itt lesz az a logika amivel a termékeket betöltjük, de csak a komponens inicializálása után, és elhelyezzük a products adattagban
    // azért kell az await, mert a loadProduct egy aszinkron művelet, vagyis amíg ez végrehajtódik, más kódok és végrehajtásra kerülhetnek
    this.workers = await this.workerService.loadProductsFromJSON()
  }

}
