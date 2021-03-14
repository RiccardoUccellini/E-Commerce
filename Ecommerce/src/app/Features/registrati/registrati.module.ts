import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistratiRoutingModule } from './registrati-routing.module';
import { RegistratiComponent } from './registrati.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistratiComponent],
  imports: [
    CommonModule,
    RegistratiRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ]
})
export class RegistratiModule { }
