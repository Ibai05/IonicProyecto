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

      this.http.post('http://44.194.177.243:8001/usuario', loginData)
        .subscribe(
          (response: any) => {
            if (response.success) {
              localStorage.setItem('user', JSON.stringify(response.user));
              // o SessionStorage
              // sessionStorage.setItem('user', JSON.stringify(response.user));

              this.router.navigate(['/folder']);
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
