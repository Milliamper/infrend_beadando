import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Machine } from '../models/machine';
@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  async loadMachines() {
    return await lastValueFrom(this.http.get<Machine[]>('/api/machines'))
  }

  async addMachine(machine: Machine) { 
    return await lastValueFrom(this.http.post<Machine>('/api/machines/', machine))
  }

  async deleteMachine(id: number){
    return await lastValueFrom(this.http.delete('/api/machines/' + id))
  }

  async getMachineByIdForEditing(id: string) {
    return await lastValueFrom(this.http.get<Machine>('/api/machines/' + id))
  }
}
