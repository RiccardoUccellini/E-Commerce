import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Features/home/home.module').then(m => m.HomeModule) },
  { path: 'personalizza', loadChildren: () => import('./Features/personalizza/personalizza.module').then(m => m.PersonalizzaModule) },
  { path: 'carrello', loadChildren: () => import('./Features/carrello/carrello.module').then(m => m.CarrelloModule) },
  { path: 'login', loadChildren: () => import('./Features/login/login.module').then(m => m.LoginModule) },
  { path: 'registrati', loadChildren: () => import('./Features/registrati/registrati.module').then(m => m.RegistratiModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
