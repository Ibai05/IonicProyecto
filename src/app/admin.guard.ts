import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.admin) {
      return true; // El usuario es admin, puede acceder
    }

    // Redirigir si no es admin
    this.router.navigate(['/folder/inbox']);
    return false;
  }
}
