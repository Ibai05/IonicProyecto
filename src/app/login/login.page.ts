import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''; // Inicializar username
  password: string = ''; // Inicializar password

  constructor() {}

  ngOnInit() {
    // Inicialización si es necesario
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Lógica para manejar el inicio de sesión
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // Aquí puedes agregar la lógica para autenticar al usuario, como llamar a un servicio
    } else {
      console.log('Form is invalid');
    }
  }
}
