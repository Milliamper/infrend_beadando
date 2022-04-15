import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  tableHeaders = ['#', 'Munka megnevezése', 'Feladatok', 'Munkás', 'Törlés', 'Módosítás'];

  jobs: Job[] = [];

  constructor(private jobService: JobService, private router: Router) {}

  async ngOnInit() {
    // itt lesz az a logika amivel a termékeket betöltjük, de csak a komponens inicializálása után, és elhelyezzük a products adattagban
    // azért kell az await, mert a loadProduct egy aszinkron művelet, vagyis amíg ez végrehajtódik, más kódok és végrehajtásra kerülhetnek
    this.jobs = await this.jobService.loadJobs();
  }

  async deleteJob(id: number) {
    await this.jobService.deleteJob(id)
    this.jobs = await this.jobService.loadJobs()
  }

  navigateToJobFormForEditing(id: number) {
    this.router.navigate(['/job-form'], {
      queryParams: {
        id: id,
      },
    });
  }

}
