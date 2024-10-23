import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule), canActivate: [AuthGuard] ,
  },
  {
    path: 'alta',
    loadChildren: () => import('./alta/alta.module').then( m => m.AltaPageModule), canActivate: [AuthGuard, AdminGuard] ,
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'curso-alumnos/:id',  // Aquí se agrega el parámetro :id
    loadChildren: () => import('./curso-alumnos/curso-alumnos.module').then( m => m.CursoAlumnosPageModule)
  },
  {
    path: 'mis-cursos',
    loadChildren: () => import('./mis-cursos/mis-cursos.module').then( m => m.MisCursosPageModule)
  },
  {
    path: 'borrar',
    loadChildren: () => import('./borrar/borrar.module').then( m => m.BorrarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
