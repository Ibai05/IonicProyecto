import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.page.html',
  styleUrls: ['./mis-cursos.page.scss'],
})
export class MisCursosPage implements OnInit {
  cursos: any[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id;

    this.cursoService.getCursosPorUsuario(userId).subscribe(
      (data: any[]) => {
        this.cursos = data;
      },
      (error: any) => {
        console.error('Error al cargar los cursos del usuario', error);
      }
    );
  }
}
