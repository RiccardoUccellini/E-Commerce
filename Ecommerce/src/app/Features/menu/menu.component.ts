import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  isLoginRoute() {
    let loginPath = true;
    if (this.router.url === '/login' || this.router.url === '/registrati') {
      loginPath = false;
    }
    return loginPath;
  }

}
