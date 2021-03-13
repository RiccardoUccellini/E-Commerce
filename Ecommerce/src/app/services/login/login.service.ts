import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private REST_API_SERVER = "http://localhost:3000";
  usersData:any;

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    this.usersData = this.httpClient.get(this.REST_API_SERVER+'/users');
    return this.usersData;
  }
}
