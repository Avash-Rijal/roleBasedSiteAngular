import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { NavBarPrototypeComponent } from './nav-bar-prototype/nav-bar-prototype.component';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn() {
    return !!localStorage.getItem('loggedIn');
  }

  checkLoginDetails(username: string, password: string) {
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userType', 'admin');
    } else if (username === 'employee' && password === '12345') {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userType', 'employee');
    } else if (username === 'manager' && password === '12345') {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userType', 'manager');
    } else {
      alert('Mail address or Password is incorrect. Please try again!');
    }
  }

  navbarAuthentication() {
    if (localStorage.getItem('userType') === 'admin') {
      return {
        component: NavBarPrototypeComponent,
        inputs: { home: 'Home', mailList: 'Mail List', reports: 'Reports' },
      };
    } else if (localStorage.getItem('userType') === 'manager') {
      return {
        component: NavBarPrototypeComponent,
        inputs: { home: 'Home', mailList: 'Mail List' },
      };
    }
    return {
      component: NavBarPrototypeComponent,
      inputs: { home: 'Home' },
    };
  }
}
