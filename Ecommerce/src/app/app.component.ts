import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce';

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
