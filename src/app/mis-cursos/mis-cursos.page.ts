import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.page.html',
  styleUrls: ['./mis-cursos.page.scss'],
})
export class MisCursosPage implements OnInit {
  misCursos: any[] = [];
  usuarioId: number; // Obtén el ID del usuario de donde lo necesites (ejemplo, de LocalStorage)

  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    // Aquí debes asignar el ID del usuario, por ejemplo:
    this.usuarioId = Number(localStorage.getItem('usuarioId'));
    this.cargarMisCursos();
  }

  cargarMisCursos() {
    this.cursoService.getMisCursos(this.usuarioId).subscribe(
      (data: any[]) => {
        this.misCursos = data;
      },
      (error: any) => {
        console.error('Error al cargar los cursos del usuario', error);
      }
    );
  }
}
