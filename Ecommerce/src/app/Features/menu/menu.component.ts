import { Carrello } from '../../Store/models/carrello.model';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  carrello: Observable<Carrello[]>;

  constructor(private router: Router, private store: Store<AppState>) {

    this.carrello = this.store.select(state => state.carrello);

  }

  ngOnInit(): void {}

  isLoginRoute() {
    let loginPath = true;
    if (this.router.url === '/login' || this.router.url === '/registrati') {
      loginPath = false;
    }
    return loginPath;
  }
  checkRoute() {
    let path = this.router.url;
    return path;
  }

}
