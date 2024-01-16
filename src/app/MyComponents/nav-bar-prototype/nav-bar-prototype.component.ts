import { Component, Input, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar-prototype',
  standalone: true,
  templateUrl: './nav-bar-prototype.component.html',
  styleUrl: './nav-bar-prototype.component.css',
  imports: [RouterModule],
})
export class NavBarPrototypeComponent {
  @Input() home!: string;
  @Input() mailList!: string;
  @Input() reports!: string;
  router = inject(Router);
  onClick() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
