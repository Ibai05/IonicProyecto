import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../curso.service';
import { AuthService } from '../auth.service'; // Asegúrate de importar tu AuthService

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
  private authService = inject(AuthService); // Inyectar AuthService

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cargarCursos();
  }

  cargarCursos() {
    const usuario = this.authService.getUsuario(); // Obtener usuario del localStorage
    const usuarioId = usuario.id;

    this.cursoService.getCursosPorUsuario(usuarioId).subscribe(
      (data: any[]) => {
        this.cursos = data;
      },
      (error: any) => {
        console.error('Error al cargar cursos', error);
      }
    );
  }
}
