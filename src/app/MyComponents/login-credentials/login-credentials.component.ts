import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-credentials',
  templateUrl: './login-credentials.component.html',
  styleUrl: './login-credentials.component.css',
})
export class LoginCredentialsComponent {
  username!: string;
  password!: string;
  constructor(private router: Router, private authService: AuthService) {}
  onSubmit() {
    this.authService.checkLoginDetails(this.username, this.password);
    this.router.navigate(['/team/dashboard']);
  }
}
