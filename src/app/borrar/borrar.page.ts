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
  cursosSinNota: any[] = [];
  selectedAlumno: number | null = null;
  selectedCurso: number | null = null;

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

  cargarCursosSinNota() {
    if (this.selectedAlumno) {
      this.cursoService.getCursosSinNota(this.selectedAlumno).subscribe(
        (data: any[]) => {
          this.cursosSinNota = data;
        },
        (error: any) => {
          console.error('Error al cargar cursos sin nota', error);
        }
      );
    }
  }

  onSubmit(form: NgForm) {
    if (this.selectedAlumno && this.selectedCurso) {
      this.cursoService.quitarAlumnoDeCurso(this.selectedAlumno, this.selectedCurso).subscribe(
        (response: any) => {
          console.log('Alumno dado de baja del curso con éxito', response);
          form.reset();
          this.selectedAlumno = null;
          this.selectedCurso = null;
        },
        (error: any) => {
          console.error('Error al dar de baja al alumno del curso', error);
        }
      );
    } else {
      console.log('Formulario inválido o selección incompleta');
    }
  }
}
