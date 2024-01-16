import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./MyComponents/login-credentials/login-credentials.module').then(
        (mod) => mod.LoginCredentialsModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./MyComponents/login-credentials/login-credentials.module').then(
        (mod) => mod.LoginCredentialsModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./MyComponents/dashboard-page/dashboard-page.module').then(
        (mod) => mod.DashboardPageModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./MyComponents/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./MyComponents/mail-box/mail-box.module').then(
        (mod) => mod.MailBoxModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./MyComponents/reports/reports.module').then(
        (mod) => mod.ReportsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
