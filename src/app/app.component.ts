import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inbox', icon: 'mail' },
    { title: 'Alta', url: '/folder/alta', icon: 'mail' },
    { title: 'Login', url: '/login', icon: 'mail' },
  ];
  
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public userName: string = '';
  public userSurname: string = '';

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user.nombre || '';
    this.userSurname = user.apellido || '';
  }
}
