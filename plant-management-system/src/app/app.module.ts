import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { JobFormComponent } from './job/job-form/job-form.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { MachineComponent } from './machine/machine.component';
import { MachineFormComponent } from './machine/machine-form/machine-form.component';
import { MachineListComponent } from './machine/machine-list/machine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    TaskComponent,
    WorkerComponent,
    WorkerFormComponent,
    WorkerListComponent,
    TaskFormComponent,
    TaskListComponent,
    MainPageComponent,
    JobFormComponent,
    JobListComponent,
    MachineComponent,
    MachineFormComponent,
    MachineListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
