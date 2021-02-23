import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuModule } from '../menu/menu.module'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MDBBootstrapModule.forRoot(),
    MenuModule
  ],
})
export class HomeModule { }
