import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cursos!: any[]; 
  public usuarios!: any[]; // Para almacenar los usuarios
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

  cargarUsuariosPorCurso(cursoId: number) {
    this.cursoService.getUsuariosPorCurso(cursoId).subscribe(
      (data: any[]) => {
        this.usuarios = data; // Asigna los usuarios cargados
      },
      (error: any) => {
        console.error('Error al cargar usuarios', error);
      }
    );
  }
}
