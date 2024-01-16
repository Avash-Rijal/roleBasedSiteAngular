import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardPageComponent } from './MyComponents/dashboard-page/dashboard-page.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { LoginCredentialsComponent } from './MyComponents/login-credentials/login-credentials.component';
import { ReportsComponent } from './MyComponents/reports/reports.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarPrototypeComponent } from './MyComponents/nav-bar-prototype/nav-bar-prototype.component';
import { NavBarComponent } from './MyComponents/nav-bar/nav-bar.component';
import { MailBoxComponent } from './MyComponents/mail-box/mail-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCredentialsComponent,
    DashboardPageComponent,
    HomeComponent,
    MailBoxComponent,
    ReportsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NavBarComponent,
    NavBarPrototypeComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
