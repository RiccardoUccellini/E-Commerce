import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  private REST_API_SERVER = "http://localhost:3000";
  usersData: any;

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(username, password, nome, cognome, telefono, citta, cap, indirizzo){
    this.usersData = this.httpClient.post(this.REST_API_SERVER+'/users',
    {"username": username,"password": password, "nome": nome, "cognome": cognome, "telefono": telefono, "citta": citta, "cap": cap, "indirizzo": indirizzo});
    console.log(username, password, nome, cognome, telefono, citta, cap, indirizzo);
    return this.usersData;
  }

}
