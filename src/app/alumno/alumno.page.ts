import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service'; // Asegúrate de que la ruta sea correcta
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnosPage implements OnInit {
  public alumnos!: any[];
  private activatedRoute = inject(ActivatedRoute);
  private alumnoService = inject(AlumnoService);
  private cursoService = inject(CursoService);

  constructor() {}

  ngOnInit() {
    const cursoId = this.activatedRoute.snapshot.paramMap.get('id'); // Obtén el ID del curso
    this.cargarAlumnos(cursoId); // Cargar los alumnos para este curso
  }

  cargarAlumnos(cursoId: string | null) {
    this.cursoService.getAlumnosPorCurso(cursoId).subscribe(
      (data: any[]) => {
        this.alumnos = data; // Asigna los alumnos cargados a la propiedad
      },
      (error: any) => {
        console.error('Error al cargar alumnos', error);
      }
    );
  }
}
