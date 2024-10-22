import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.page.html',
  styleUrls: ['./mis-cursos.page.scss'],
})
export class MisCursosPage implements OnInit {
  cursos: any[] = [];
  userId: string=''; 

  constructor(private cursoService: CursoService, private router: Router) {} // Inyecta el Router

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.userId = parsedUser.id; // Este debe ser el ID correcto
      this.loadCursos(); // Llama a la función para cargar los cursos
    } else {
      console.error('No se pudo encontrar el usuario en localStorage');
      // Redirigir al login si no se encuentra el usuario
      this.router.navigate(['/login']);
    }
  }

  loadCursos() {
    this.cursoService.getCursosPorUsuario(this.userId).subscribe(
      (data: any[]) => {
        this.cursos = data;
      },
      (error: any) => {
        console.error('Error al cargar los cursos del usuario', error);
      }
    );
  }
}
