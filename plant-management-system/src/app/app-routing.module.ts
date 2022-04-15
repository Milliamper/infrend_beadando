import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskComponent } from './task/task.component';
import { WorkerFormComponent } from './worker/worker-form/worker-form.component';
import { WorkerListComponent } from './worker/worker-list/worker-list.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
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
    path: 'task-form',
    component: TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
