import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { Machine } from 'src/app/models/machine';
import { Task } from 'src/app/models/task';
import { JobService } from 'src/app/services/job.service';
import { MachineService } from 'src/app/services/machine.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  jobs!: Job[];
  machines!: Machine[];
  szabadMachines: Machine[] = [];
  tasks: Task[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobService: JobService,
    private machineService: MachineService
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id']; // id kiolvasása szerkesztéshez
    this.jobs = await this.jobService.loadJobs();
    this.machines = await this.machineService.loadMachines();
    this.szabadMachines = this.filterSzabad('szabad');
    this.tasks = await this.taskService.loadTasks();
    if (id) {
      // ha érvényes az id...
      const task = await this.taskService.getTaskByIdForEditing(id); // ..letároljuk egy változóban
      this.taskForm.setValue(task); // ...űrlapra betöltjük a szerkeszteni kívánt task adatait
    }
  }

  filterSzabad(status: string) {
    return this.machines.filter((x) => x.status === status);
  }

  taskForm: FormGroup = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    gep: ['', Validators.required],
    munka: ['', Validators.required],
  });

  addTask() {
    if (
      this.tasks.find((x) => x.name === this.taskForm.controls['name'].value)
    ) {
      // annak ellenörzése, hogy szerepel-e a db-ben az adott feladat
      alert('Ezzel a névvel már szerepel feladat az adatbázisban');
    } else {
      const task = this.taskForm.value;
      this.taskService.addTask(task);
      this.router.navigateByUrl('/');
    }
  }

  // It provides some of the shared behavior that all controls and groups of controls have, like running validators
  get f(): { [key: string]: AbstractControl } {
    return this.taskForm.controls;
  }
}
