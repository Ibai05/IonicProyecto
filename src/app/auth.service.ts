import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable(); 

  constructor() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    this.userSubject.next(user); 
  }

  login(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user); 
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null); 
  }
}
