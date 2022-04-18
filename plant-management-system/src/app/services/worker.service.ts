import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Worker } from '../models/worker';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient) {}

  async loadWorkers() {
    return await lastValueFrom(this.http.get<Worker[]>('/api/workers'));
  }

  async addWorker(worker: Worker) {
    return await lastValueFrom(this.http.post<Worker>('/api/workers/', worker));
  }

  async deleteWorker(id: number) {
    return await lastValueFrom(this.http.delete('/api/workers/' + id));
  }

  async getWorkerByIdForEditing(id: string) {
    return await lastValueFrom(this.http.get<Worker>('/api/workers/' + id));
  }

  async filterStatus(search: string) {
    return await lastValueFrom(
      this.http.get<Worker[]>(
        '/api/workers' +
          {
            params: { search },
          }
      )
    );
  }
}
