import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css'],
})
export class WorkerFormComponent implements OnInit {
  
  successMessage!: string // sikeres hozzáadás esetén ezt az üzenetet írjuk ki
  errorMessage!: string // szerver valamilyen hibát ad vissza

  constructor(
    private formBuilder: FormBuilder,
    private workerService: WorkerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id']; // id kiolvasása szerkesztéshez

    if (id) { // ha érvényes az id...
      const worker = await this.workerService.getWorkerByIdForEditing(id); // ..letároljuk egy változóban 
      this.workerForm.setValue(worker) // ...űrlapra betöltjük a szerkeszteni kívánt worker adatait
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.workerForm.controls;
  }

  workerForm: FormGroup = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    qualification: ['', Validators.compose([Validators.minLength(3), Validators.required])],
    hourly_wage: ['', Validators.compose([Validators.min(1495),Validators.required])],
    status: ['', Validators.required],
  });

  async addWorker() {
    const worker = this.workerForm.value;
    this.successMessage=''
    this.errorMessage=''
    try{
      const workerAdded = await this.workerService.addWorker(worker)
      this.router.navigateByUrl('/');
    } catch (error) {
      console.log(error)
    }
  }

  
}
