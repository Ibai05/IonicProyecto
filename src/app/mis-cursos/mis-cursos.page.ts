// src/app/mis-cursos/mis-cursos.page.ts

import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.page.html',
  styleUrls: ['./mis-cursos.page.scss'],
})
export class MisCursosPage implements OnInit {
  cursos: any[] = [];
  userId: string='';

  constructor(private cursoService: CursoService, private router: Router) {}

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userId = parsedUser.id; // Obtener el ID del usuario
      this.loadCursos(); // Llama a la función para cargar los cursos
    } else {
      console.error('No se pudo encontrar el usuario en localStorage');
      this.router.navigate(['/login']); // Redirige al login si no se encuentra el usuario
    }
  }

  loadCursos() {
    this.cursoService.getCursosPorUsuario(this.userId).subscribe(
      (data: any[]) => {
        this.cursos = data; // Asigna los cursos a la variable local
      },
      (error: any) => {
        console.error('Error al cargar los cursos del usuario', error);
      }
    );
  }
}
