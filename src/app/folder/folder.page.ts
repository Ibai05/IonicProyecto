import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cursos!: any[];
  public alumnos: any[] = []; // Almacenar los alumnos del curso seleccionado
  private activatedRoute = inject(ActivatedRoute);
  private cursoService = inject(CursoService);

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
    this.cursoService.getAlumnosPorCurso(cursoId).subscribe(
      (data: any[]) => {
        this.alumnos = data; // Asignar los alumnos del curso seleccionado
      },
      (error: any) => {
        console.error('Error al cargar alumnos del curso', error);
      }
    );
  }
}
