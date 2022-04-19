import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  styleUrls: ['./job-form.component.css'],
})
export class JobFormComponent implements OnInit {
  workers: Worker[] = [];
  szabadWorkers: Worker[] = []; // betöltöm az összes munkást, majd ezt a tömböt csak azokkal töltöm fel, akiknek a státusza szabad
  specifiedStatus = 'szabad';

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private workerService: WorkerService
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id']; // id kiolvasása szerkesztéshez

    this.workers = await this.workerService.loadWorkers();
    this.szabadWorkers = this.filterSzabad('szabad');

    if (id) {
      // ha érvényes az id...
      const job = await this.jobService.getJobByIdForEditing(id); // ..letároljuk egy változóban
      this.jobForm.setValue(job); // ...űrlapra betöltjük a szerkeszteni kívánt product adatait
    }
  }

  filterSzabad(status: string) {
    return this.workers.filter((x) => x.status === status);
  }

  jobForm: FormGroup = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    munkas: [Validators.required],
  });

  addJob() {
    const job = this.jobForm.value;
    this.jobService.addJob(job);
    this.router.navigateByUrl('/');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.jobForm.controls;
  }
}
