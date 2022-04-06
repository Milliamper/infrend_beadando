import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { TaskComponent } from './task/task.component';
import { WorkerComponent } from './worker/worker.component';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    TaskComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
