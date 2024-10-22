import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class InicioPage implements OnInit {
  cursos: any[] = [];
  isAdmin: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.isAdmin = user.admin;

    if (this.isAdmin) {
      // Si el usuario es admin, cargar todos los cursos
      this.cargarTodosLosCursos();
    } else {
      // Si el usuario no es admin, cargar los cursos del alumno
      this.cargarCursosAlumno(user.id);
    }
  }

  cargarTodosLosCursos() {
    this.http.get('http://44.194.177.243:8001/cursos')
      .subscribe(
        (data: any) => {
          this.cursos = data;
        },
        (error: any) => {
          console.log('Error al cargar todos los cursos:', error);
        }
      );
  }

  cargarCursosAlumno(usuarioId: number) {
    this.http.get(`http://44.194.177.243:8001/alumno/cursos/${usuarioId}`)
      .subscribe(
        (data: any) => {
          this.cursos = data;
        },
        (error: any) => {
          console.log('Error al cargar cursos del alumno:', error);
        }
      );
  }
}
