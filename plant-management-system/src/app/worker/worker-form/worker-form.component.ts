import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css'],
})
export class WorkerFormComponent implements OnInit {
  workers!: Worker[];

  constructor(
    private formBuilder: FormBuilder,
    private workerService: WorkerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  workerForm: FormGroup = this.formBuilder.group({
    id: [],
    name: [''],
    qualification: [''],
    hourly_wage: [''],
    status: [''],
  });

  addWorker() {
    const worker = this.workerForm.value;
    this.workerService.addWorker(worker);
    this.router.navigateByUrl('/');
  }

  
}
