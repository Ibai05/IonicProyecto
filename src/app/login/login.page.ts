import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  onSubmit() {
    // Aquí puedes agregar la lógica para verificar el usuario y la contraseña
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    // Simulación de inicio de sesión exitoso
    if (this.username === 'admin' && this.password === '1234') {
      // Navegar a la página principal o a la siguiente página
      this.router.navigate(['/home']);
    } else {
      // Manejar el error de inicio de sesión
      alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
  }
}
