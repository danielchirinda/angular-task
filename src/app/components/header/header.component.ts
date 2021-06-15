import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:String = 'angular-crash';


  constructor() { }

  /**
   * To run when a component load
   */
  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log('On Header')
  }

}
