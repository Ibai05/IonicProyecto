import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service'; 
import { AlumnoService } from '../alumno.service'; // Asegúrate de que la ruta sea correcta
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cursos!: any[]; 
  public alumnos!: any[]; // Agregar esta propiedad
  private activatedRoute = inject(ActivatedRoute);
  private cursoService = inject(CursoService);
  private alumnoService = inject(AlumnoService); // Inyectar el servicio de alumnos

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cargarCursos(); 
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

  cargarAlumnos(cursoId: number) {
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
