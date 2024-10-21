import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''; 
  password: string = ''; 

  constructor() {}

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      
    } else {
      console.log('Form is invalid');
    }
  }
}
