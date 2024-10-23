import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlumnoService } from '../alumno.service';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.page.html',
  styleUrls: ['./borrar.page.scss'],
})
export class BorrarPage implements OnInit {

  alumnos: any[] = [];
  cursos: any[] = [];
  selectedAlumno: number | null = null;

  constructor(private alumnoService: AlumnoService, private cursoService: CursoService) {}

  ngOnInit() {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.alumnoService.getAlumnos().subscribe(
      (data: any[]) => {
        this.alumnos = data;
      },
      (error: any) => {
        console.error('Error al cargar alumnos', error);
      }
    );
  }


}
