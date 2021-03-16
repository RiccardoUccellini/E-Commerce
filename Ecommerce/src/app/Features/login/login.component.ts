import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { currentUser } from '../../Store/models/user.model';
import * as usersActions from '../../Store/actions/users.actions';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Observable<currentUser[]>;
  userData: any;

  constructor(private LoginService: LoginService, private router: Router, private store: Store<AppState>) {
    this.user = this.store.select(state => state.users);
  }

  getAuth(username: any, password: any) {

    this.LoginService.sendGetRequest().subscribe((data: any[])=>{
      this.userData = data.filter(object => {
        return object['username'] == username;
      });

      if (this.userData.length < 1) {
        alert("L'utente inserito non esiste!");
        return;
      }
      else if ( password == this.userData[0].password) {
        alert("Loggato");
        this.store.dispatch(new usersActions.AddUser({
            id: this.userData[0].id,
            username: this.userData[0].username,
            nome: this.userData[0].nome,
            cognome: this.userData[0].cognome,
            cellulare: this.userData[0].cellulare,
            citta: this.userData[0].citta,
            cap: this.userData[0].cap,
            indirizzo: this.userData[0].indirizzo
        }));

        this.router.navigateByUrl("/home");
      }
      else {
        alert("Password non corretta!");
        return;
      }
    });

  }

  ngOnInit(): void { }
}
