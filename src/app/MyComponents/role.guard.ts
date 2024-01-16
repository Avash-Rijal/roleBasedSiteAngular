import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const canActivate = () => {
    const Role = localStorage.getItem('userType');
    if (Role === 'admin') {
      return true;
    }
    alert("You don't have admin rights.");
    return false;
  };
  return canActivate();
};
