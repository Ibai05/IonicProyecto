import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    
    // Obtener la información del usuario desde LocalStorage o SessionStorage
    const usuario = await this.storage.get('usuario');

    // Si no existe el usuario, redirigir al login
    if (!usuario) {
      this.router.navigate(['/login']);
      return false;
    }

    // Comprobar si la ruta requiere que el usuario sea admin
    const requiereAdmin = next.data['requiereAdmin'] || false;

    // Si la ruta requiere ser admin, comprobar si el usuario es admin
    if (requiereAdmin && !usuario.admin) {
      // Si no es admin, redirigir a la página de inicio o donde prefieras
      this.router.navigate(['/inicio']);
      return false;
    }

    // Si el usuario es válido y cumple con los requisitos, permitir el acceso
    return true;
  }
}
