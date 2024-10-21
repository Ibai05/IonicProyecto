import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer peticiones
import { Router } from '@angular/router'; // Para redireccionar al inicio

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''; 
  password: string = ''; 

  constructor(private http: HttpClient, private router: Router) {} // Inyecta HttpClient y Router

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const loginData = {
        nombre: this.username,
        contrasena: this.password
      };

      this.http.post('http://44.194.177.243:8001/login', loginData)
        .subscribe(
          (response: any) => {
            if (response.success) {
              // Supongamos que el backend devuelve nombre y apellido
              const user = {
                nombre: response.user.nombre, // Cambia según la respuesta de tu backend
                apellido: response.user.apellido // Cambia según la respuesta de tu backend
              };

              localStorage.setItem('user', JSON.stringify(user)); // Guardar usuario en LocalStorage

              this.router.navigate(['/folder/inbox']);
            } else {
              console.log('Credenciales incorrectas');
            }
          },
          (error: any) => {
            console.log('Error en la autenticación:', error);
          }
        );
    } else {
      console.log('Formulario inválido');
    }
  }
}
