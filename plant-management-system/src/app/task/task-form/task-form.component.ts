import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {


  tasks!: Task[];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParams['id']; // id kiolvasása szerkesztéshez

    if (id) { // ha érvényes az id...
      const task = await this.taskService.getTaskByIdForEditing(id); // ..letároljuk egy változóban 
      this.taskForm.setValue(task) // ...űrlapra betöltjük a szerkeszteni kívánt product adatait
    }
  }

  taskForm: FormGroup = this.formBuilder.group({
    id: [],
    name: [''],
    machine: [''],
  });

  addTask() {
    const task = this.taskForm.value;
    this.taskService.addTask(task);
    this.router.navigateByUrl('/');
  }

}
