import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '../services/curso.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public cursos: any[] = []; // Array para almacenar los cursos
  private activatedRoute = inject(ActivatedRoute);
  private cursoService = inject(CursoService); // Inyección del servicio

  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cargarCursos(); // Llamar a la función para cargar los cursos
  }

  cargarCursos() {
    this.cursoService.getCursos().subscribe(
      (data) => {
        this.cursos = data; // Almacena los cursos en el array
        console.log(this.cursos); // Puedes ver los cursos en la consola
      },
      (error) => {
        console.error('Error al cargar los cursos', error); // Manejo de errores
      }
    );
  }
}
