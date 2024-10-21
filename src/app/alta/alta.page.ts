import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlumnoService } from '../alumno.service';
import { CursoService } from '..curso.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.page.html',
  styleUrls: ['./alta.page.scss'],
})
export class AltaPage implements OnInit {
  alumnos: any[] = [];
  cursos: any[] = [];
  selectedAlumno: number | null = null;
  selectedCurso: number | null = null;

  constructor(private alumnoService: AlumnoService, private cursoService: CursoService) {}

  ngOnInit() {
    this.cargarAlumnos();
    this.cargarCursos();
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

  cargarCursos() {
    this.cursoService.getCursos().subscribe(
      (data: any[]) => {
        this.cursos = data;
      },
      (error: any) => {
        console.error('Error al cargar cursos', error);
      }
    );
  }

  onSubmit(form: NgForm) {
    if (form.valid && this.selectedAlumno && this.selectedCurso) {
      this.cursoService.asignarAlumnoACurso(this.selectedAlumno, this.selectedCurso).subscribe(
        (response: any) => {
          console.log('Alumno asignado al curso con éxito', response);
          form.reset();
          this.selectedAlumno = null;
          this.selectedCurso = null;
        },
        (error: any) => {
          console.error('Error al asignar alumno al curso', error);
        }
      );
    } else {
      console.log('Formulario inválido o selección incompleta');
    }
  }
}
