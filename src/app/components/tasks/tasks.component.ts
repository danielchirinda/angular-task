import { Component, OnInit } from '@angular/core';
import { TASKS } from '.././../mock-tasks';
import { Task } from '.././../Task';
import { TasksService } from '../../services/tasks.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  // Injecting Task Service as a provider
  constructor(private taskService: TasksService) { }

  //on load has to get all tasks
  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) =>{this.tasks=tasks})
  }

}
