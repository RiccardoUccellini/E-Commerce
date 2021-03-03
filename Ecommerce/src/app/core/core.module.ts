import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCommunicationsService } from './http-communications/http-communications.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [HttpCommunicationsService/*,RegistrazioneServerService*/],
})
export class CoreModule { }
