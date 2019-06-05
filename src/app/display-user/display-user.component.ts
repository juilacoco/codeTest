import { Component, OnInit, Input } from '@angular/core';
import { User } from '../form/form.component';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
 

  @Input() user:User;
  constructor() { 
    
 
  }

  ngOnInit() {
    localStorage.clear()


  }
  


}

