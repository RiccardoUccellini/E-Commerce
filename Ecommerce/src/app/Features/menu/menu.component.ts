import { Item } from '../../Store/models/item.model';
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

  cartItems: Observable<Item[]>;

  constructor(private router: Router, private store: Store<AppState>) {

    this.cartItems = this.store.select(state => state.item);

  }

  ngOnInit(): void {}

  isLoginRoute() {
    let loginPath = true;
    if (this.router.url === '/login' || this.router.url === '/registrati') {
      loginPath = false;
    }
    return loginPath;
  }
  isCartRoute() {
    let loginPath = '';
    if (this.router.url === '/carrello') {
      loginPath = 'carrello';
    }
    return loginPath;
  }

}
