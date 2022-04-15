import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css'],
})
export class WorkerFormComponent implements OnInit {
  workers!: Worker[];

  constructor(
    private formBuilder: FormBuilder,
    private workerService: WorkerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id']; // id kiolvasása szerkesztéshez

    if (id) { // ha érvényes az id...
      const product = await this.workerService.getWorkerByIdForEditing(id); // ..letároljuk egy változóban 
      this.workerForm.setValue(product) // ...űrlapra betöltjük a szerkeszteni kívánt product adatait
    }
  }

  workerForm: FormGroup = this.formBuilder.group({
    id: [],
    name: [''],
    qualification: [''],
    hourly_wage: [''],
    status: [''],
  });

  addWorker() {
    const worker = this.workerForm.value;
    this.workerService.addWorker(worker);
    this.router.navigateByUrl('/');
  }

  
}
