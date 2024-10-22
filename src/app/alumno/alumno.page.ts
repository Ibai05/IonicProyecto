import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service'; // Asegúrate de que la ruta sea correcta
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html', // Asegúrate de que el nombre del archivo HTML sea correcto
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

}
