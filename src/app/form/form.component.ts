import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user:any = new User();
  subscriptionTypes = ["Basic", "Advanced", "Pro"];
  show:boolean;

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    this.user.subscriptionType = 'Advanced';
    this.show = true;
  }

  checkChar(password:any):boolean{
    return /[a-zA-Z]/.test(password);
  }
  checkSpecialChar(password:any):boolean{
    return /[@#$%~()]/.test(password);
  }


  // Upon submitting the form, 
  //you should simply print the Value of the Form in a separate page.
  submit(){
    this.show = false;
  }

  //  If form is modified and clear is clicked, 
  // prompt user confirming that they are sure to discard the changes.
  clear(){
    if (this.user.email != null 
        && this.user.password != null
        && this.user.subscriptionType != null) {
      alert(" Sure to discard the changes ?");
    }
    
    this.user = new User();
    this.user.subscriptionType = "Advanced";
    this.user.email = '';
    this.user.password = '';
  }

}

export class User{
  email: string;
  subscriptionType: string;
  password: string;
}
