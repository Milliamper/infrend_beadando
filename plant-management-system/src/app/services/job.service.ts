import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  async loadJobs() {
    return await lastValueFrom(this.http.get<Job[]>('/api/jobs'))
  }

  async addJob(job: Job) { 
    return await lastValueFrom(this.http.post<Task>('/api/jobs/', job))
  }

  async deleteJob(id: number){
    return await lastValueFrom(this.http.delete('/api/jobs/' + id))
  }

  async getJobByIdForEditing(id: string) {
    return await lastValueFrom(this.http.get<Job>('/api/jobs/' + id))
  }
}
