import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  text: string = '';
  day: string = '';
  reminder: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSumit() {
    if (!this.text) {
      alert('Please add a task!')
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder

    }

    /**
     * Emmit the event
     *  */

    this.onAddTask.emit(newTask)

    this.reminder=false
    this.day = ''
    this.text = ''
  }

}
