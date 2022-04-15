import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { TaskComponent } from './task/task.component';
import { WorkerComponent } from './worker/worker.component';
import { WorkerFormComponent } from './worker/worker-form/worker-form.component';
import { WorkerListComponent } from './worker/worker-list/worker-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [AppComponent, JobComponent, TaskComponent, WorkerComponent, WorkerFormComponent, WorkerListComponent, TaskFormComponent, TaskListComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
