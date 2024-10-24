import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private apiUrl = 'http://44.194.177.243:8001/cursos'; 

  constructor(private http: HttpClient) {}

  getCursos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  asignarAlumnoACurso(alumnoId: number, cursoId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/asignar-alumno`, { alumno_id: alumnoId, curso_id: cursoId });

  }

  getCursosPorUsuario(userId: string): Observable<any> {
    return this.http.get<any>(`http://44.194.177.243:8001/usuario/cursos/${userId}`);
  }

  getCursosSinNota(alumnoId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://44.194.177.243:8001/alumno/${alumnoId}/cursos-sin-nota`);
  }

  quitarAlumnoDeCurso(alumnoId: number, cursoId: number): Observable<any> {
    return this.http.delete(`http://44.194.177.243:8001/alumno/${alumnoId}/curso/${cursoId}/baja`);
  }
  
}
