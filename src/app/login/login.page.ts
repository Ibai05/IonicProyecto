import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
  })
  export class LoginPage implements OnInit {
    username: string; // Define username
    password: string; // Define password

    constructor() {}

    ngOnInit() {
      // Inicialización si es necesario
    }

    onSubmit() {
      // Lógica para manejar el inicio de sesión
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }

}
