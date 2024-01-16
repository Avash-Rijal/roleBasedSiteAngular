import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  imports: [NgComponentOutlet],
})
export class NavBarComponent {
  navBarComponent = inject(AuthService).navbarAuthentication();
}
