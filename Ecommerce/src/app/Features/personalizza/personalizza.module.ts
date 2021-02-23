import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizzaRoutingModule } from './personalizza-routing.module';
import { PersonalizzaComponent } from './personalizza.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [PersonalizzaComponent],
  imports: [
    CommonModule,
    PersonalizzaRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class PersonalizzaModule { }
