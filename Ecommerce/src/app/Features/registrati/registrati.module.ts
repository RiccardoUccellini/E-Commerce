import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistratiRoutingModule } from './registrati-routing.module';
import { RegistratiComponent } from './registrati.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [RegistratiComponent],
  imports: [
    CommonModule,
    RegistratiRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class RegistratiModule { }
