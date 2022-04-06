import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private http: HttpClient) { }

  async loadWorkers() { // be kell tölteni a termékeket a products.json fájlból a mi tömbbünke
    return await lastValueFrom(this.http.get<Worker[]>('/api/workers'))
  }

  // új munkás beillesztése a storage elejére
  async addWorker(workers: Worker) { //paraméterként megkap egy terméket
    return await lastValueFrom(this.http.post<Worker>('/api/workers', workers))
  }

  async getWorkerById(id: number) {
    return await lastValueFrom(this.http.get<Worker>('/api/workers/' + id))
  }
}
