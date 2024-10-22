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
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
