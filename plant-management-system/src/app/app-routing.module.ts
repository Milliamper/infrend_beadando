import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TaskComponent } from './task/task.component';
import { WorkerComponent } from './worker/worker.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'workers',
    component: WorkerComponent
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
