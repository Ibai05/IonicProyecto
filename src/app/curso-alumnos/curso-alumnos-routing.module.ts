import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoAlumnosPage } from './curso-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: CursoAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoAlumnosPageRoutingModule {}
