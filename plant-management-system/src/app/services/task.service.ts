import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  async loadTasks() {
    return await lastValueFrom(this.http.get<Task[]>('/api/tasks'))
  }

  async addTask(task: Task) { 
    return await lastValueFrom(this.http.post<Task>('/api/tasks/', task))
  }

  async deleteTask(id: number){
    return await lastValueFrom(this.http.delete('/api/tasks/' + id))
  }

  async getTaskByIdForEditing(id: string) {
    return await lastValueFrom(this.http.get<Task>('/api/tasks/' + id))
  }
}
