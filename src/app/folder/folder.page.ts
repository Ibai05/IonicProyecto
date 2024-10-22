import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service'; // Asegúrate de que la ruta sea correcta
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cursos!: any[]; 
  private activatedRoute = inject(ActivatedRoute);
  private cursoService = inject(CursoService);
  router: any;
  verAlumnos(cursoId: number) {
    this.router.navigate(['/alumnos', cursoId]);
  }

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
}
