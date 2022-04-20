import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/models/machine';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  machines: Machine[] = []

  tableHeaders = [
    '#',
    'Név',
    'Státusz',
    'Törlés',
    'Módosítás',
  ];

  constructor(private router: Router, private machineService: MachineService) { }

  async ngOnInit() {
    this.machines = await this.machineService.loadMachines()
  }

  async deleteMachine(id: number) {
    await this.machineService.deleteMachine(id);
    this.machines = await this.machineService.loadMachines();
  }

  navigateToMachineFormForEditing(id: number) {
    this.router.navigate(['/machine-form'], {
      queryParams: {
        id: id,
      },
    });
  }

}