import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/models/machine';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine-form',
  templateUrl: './machine-form.component.html',
  styleUrls: ['./machine-form.component.css']
})
export class MachineFormComponent implements OnInit {

  machines: Machine[] = []

  constructor(
    private formBuilder: FormBuilder,
    private machineService: MachineService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id']; // id kiolvasása szerkesztéshez

    if (id) { // ha érvényes az id...
      const machine = await this.machineService.getMachineByIdForEditing(id); // ..letároljuk egy változóban 
      this.machineForm.setValue(machine) // ...űrlapra betöltjük a szerkeszteni kívánt worker adatait
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.machineForm.controls;
  }

  machineForm: FormGroup = this.formBuilder.group({
    id: [],
    name: ['', Validators.required],
    status: ['', Validators.required],
  });

  async addMachine() {
    const machine = this.machineForm.value

    try{
      const machineAdded = await this.machineService.addMachine(machine)
      this.router.navigateByUrl('/');
    } catch (error) {
      console.log(error)
    }
  }
}