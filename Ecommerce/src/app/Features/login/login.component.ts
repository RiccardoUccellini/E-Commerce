import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;
  newData: any;

  constructor(private LoginService: LoginService) { }

  getAuth(username: any, password: any) {

    this.LoginService.sendGetRequest().subscribe((data: any[])=>{
      this.userData = data.filter(object => {
        return object['username'] == username;
      });
      // this.userData = JSON.parse(this.userData);
      if (this.userData.length < 1) {
        alert("L'utente inserito non esiste!");
      }
      else if ( password == this.userData[0].password) {
        alert("Log in effettuato!");
      }
      else {
        alert("Password non corretta!");
        return;
      }
    });

  }

  ngOnInit(): void { }
}
