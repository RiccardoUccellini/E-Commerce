import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
