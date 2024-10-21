import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable(); // Observable para suscribirse a los cambios

  constructor() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    this.userSubject.next(user); // Inicializa el estado con el usuario guardado en LocalStorage
  }

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user); // Notifica a los suscriptores sobre el nuevo usuario
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null); // Notifica que no hay usuario
  }
}
