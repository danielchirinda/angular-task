import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Task} from '../../Task'
import {faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task: Task = {
    id:1,
    day:'2020-06-17',
    reminder:true,
    text:'Working'
  };

  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  faTimes= faTimes


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    console.log(task)

    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task){
    this.onToggleReminder.emit(task);
    console.log('reminder')

  }

}
