import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../models/worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
})
export class WorkerComponent implements OnInit {
  constructor(private router:Router) {}

  id = 1
  tableHeaders = ['#' ,'Név', 'Szakképzettség', 'Órabér', 'Státusz']

  ngOnInit(): void {}

}
