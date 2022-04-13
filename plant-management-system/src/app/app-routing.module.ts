import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { TaskComponent } from './task/task.component';
import { WorkerFormComponent } from './worker/worker-form/worker-form.component';
import { WorkerListComponent } from './worker/worker-list/worker-list.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: '',
    component: WorkerListComponent
  },
  {
    path: 'worker-form',
    component: WorkerFormComponent
  },
  {
    path:'jobs',
    component: JobComponent
  },
  {
    path: 'tasks',
    component: TaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
