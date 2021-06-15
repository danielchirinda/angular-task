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
    this.taskService.getTasks().subscribe((tasks) => { this.tasks = tasks })
  }

  deleteTask(task: Task) {
    console.log('Deleting tasks')
    this.taskService.deleteTask(task).subscribe(() => { this.tasks = this.tasks.filter(t => t.id !== task.id) })

  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTasks(task: Task){
    console.log('add task')
    this.taskService.addTask(task).subscribe((task) => { this.tasks.push(task) })


  }
}
