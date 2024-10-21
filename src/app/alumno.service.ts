import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://44.194.177.243:8001/alumno'; // Cambia esto a tu URL base

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/alumnos`); // Asegúrate de que esta ruta exista en tu API
  }
}
