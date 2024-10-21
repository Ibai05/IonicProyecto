import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ''; 
  password: string = ''; 

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {} 

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
              const user = {
                id: response.user.id, // Asegúrate de que este campo está disponible
                nombre: response.user.nombre,
                admin: response.user.admin // Aquí agregas el campo admin
              };
  
              // Guarda el usuario en localStorage
              localStorage.setItem('user', JSON.stringify(user));
  
              // Inicia sesión a través del AuthService
              this.authService.login(user); 
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
