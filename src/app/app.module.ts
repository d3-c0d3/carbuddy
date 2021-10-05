import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ButtonComponent } from './components/ui/button/button.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { BackdropComponent } from './components/ui/backdrop/backdrop.component';
import { ModalComponent } from './components/ui/modal/modal.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ButtonComponent,
    AddpostComponent,
    BackdropComponent,
    ModalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
