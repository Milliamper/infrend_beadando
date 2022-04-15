import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { Task } from 'src/app/models/task';
import { Worker } from 'src/app/models/worker';
import { JobService } from 'src/app/services/job.service';
import { TaskService } from 'src/app/services/task.service';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  jobs!: Job[];
  tasks!: Task[]
  workers!: Worker[]

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private workerService: WorkerService
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id']; // id kiolvasása szerkesztéshez

    this.tasks = await this.taskService.loadTasks();
    this.workers = await this.workerService.loadWorkers()

    if (id) { // ha érvényes az id...
      const task = await this.jobService.getJobByIdForEditing(id); // ..letároljuk egy változóban 
      this.jobForm.setValue(task) // ...űrlapra betöltjük a szerkeszteni kívánt product adatait
    }
  }

  jobForm: FormGroup = this.formBuilder.group({
    id: [],
    name: [''],
    tasks: [[]],
    workers: [[]]
  });

  addJob() {
    const job = this.jobForm.value;
    this.jobService.addJob(job);
  }

    // termékben lévő felhasználót összehasonlítjuk a felhasználói listában lévő felhasználóval
    compareTasks(task1: Task, task2: Task) {
      return task1 && task2 && task1.id === task2.id
    }

}
