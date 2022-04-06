import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  workerForm: FormGroup = this.formBuilder.group({
    id: [],
    name: [''],
    qualification: [''],
    hourly_wage: [''],
    status: ['']
  })

  ngOnInit(): void {
  }

}
