import { Component } from '@angular/core';
import { AuthService } from './auth.service'; 

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inbox', icon: 'mail' },
    { title: 'Alta', url: '/alta', icon: 'mail' },
    { title: 'Login', url: '/login', icon: 'mail' }
  ];

  public adminPages = [
    { title: 'Borrar', url: '/borrar', icon: 'trash' }
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public userName: string = '';
  public userSurname: string = '';
  public isAdmin: boolean = false; 

  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((user: { nombre: string; apellido: string; admin: boolean; }) => {
      if (user) {
        this.userName = user.nombre || '';
        this.userSurname = user.apellido || '';
        this.isAdmin = user.admin; 
      } else {
        this.userName = '';
        this.userSurname = '';
        this.isAdmin = false; 
      }
    });
  }
}
