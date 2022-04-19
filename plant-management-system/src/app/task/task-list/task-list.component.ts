import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tableHeaders = [
    '#',
    'Feladat megnevezése',
    'Gép amelyen elvégzendő',
    'Munka',
    'Törlés',
    'Módosítás',
  ];

  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  async ngOnInit() {
    // itt lesz az a logika amivel a termékeket betöltjük, de csak a komponens inicializálása után, és elhelyezzük a tasks adattagban
    // azért kell az await, mert a loadTasks egy aszinkron művelet, vagyis amíg ez végrehajtódik, más kódok és végrehajtásra kerülhetnek
    this.tasks = await this.taskService.loadTasks();
  }

  async deleteTask(id: number) {
    await this.taskService.deleteTask(id);
    this.tasks = await this.taskService.loadTasks();
  }

  navigateToTaskFormForEditing(id: number) {
    this.router.navigate(['/task-form'], {
      queryParams: {
        id: id,
      },
    });
  }
}
