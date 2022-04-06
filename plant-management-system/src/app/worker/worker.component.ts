import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
})
export class WorkerComponent implements OnInit {
  workers!: Worker[];

  constructor(
    private formBuilder: FormBuilder,
    private workerService: WorkerService
  ) {}

  workerForm: FormGroup = this.formBuilder.group({
    id: [],
    name: [''],
    qualification: [''],
    hourly_wage: [''],
    status: [''],
  });

  ngOnInit(): void {}
}
