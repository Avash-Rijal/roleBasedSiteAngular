import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCredentialsComponent } from './login-credentials.component';

const routes: Routes = [
  {
    path: '',
    component: LoginCredentialsComponent,
  },
  {
    path: 'login',
    component: LoginCredentialsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCredentialsRoutingModule {}
