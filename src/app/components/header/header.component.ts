import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: String = 'angular-crash';

  showAddTask: boolean = false
  subscription: Subscription = Subscription.EMPTY;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => { this.showAddTask = value })
  }

  /**
   * To run when a component load
   */
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('On Header')
    this.uiService.toggleAddTask()

  }

}
