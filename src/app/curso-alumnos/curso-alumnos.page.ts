import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-curso-alumnos',
  templateUrl: './curso-alumnos.page.html',
  styleUrls: ['./curso-alumnos.page.scss'],
})
export class CursoAlumnosPage implements OnInit {
  public alumnos!: any[];
  private activatedRoute = inject(ActivatedRoute);
  private alumnoService = inject(AlumnoService);

  constructor() {}

  ngOnInit() {
    const cursoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.cargarAlumnos(cursoId);
  }

  cargarAlumnos(cursoId: string | null) {
    // Llama a la función del servicio que carga los alumnos según el cursoId
    this.alumnoService.getAlumnosPorCurso(cursoId).subscribe(
      (data: any[]) => {
        this.alumnos = data; 
      },
      (error: any) => {
        console.error('Error al cargar alumnos', error);
      }
    );
  }
}
