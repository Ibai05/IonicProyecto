import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoAlumnosPageRoutingModule } from './curso-alumnos-routing.module';

import { CursoAlumnosPage } from './curso-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoAlumnosPageRoutingModule
  ],
  declarations: [CursoAlumnosPage]
})
export class CursoAlumnosPageModule {}
