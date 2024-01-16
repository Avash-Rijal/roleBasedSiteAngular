import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  capitalizeFirstLetter(inputString: string) {
    if (inputString.length === 0) {
      return inputString;
    }

    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

  userType = localStorage.getItem('userType');
  userRole = () => {
    if (this.userType) {
      return this.capitalizeFirstLetter(this.userType);
    }
    return null;
  };
}
