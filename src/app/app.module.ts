import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ButtonComponent } from './components/ui/button/button.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { BackdropComponent } from './components/ui/backdrop/backdrop.component';
import { ModalComponent } from './components/ui/modal/modal.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { PostService } from './components/dashboard/post.service';
import { DropdownnavComponent } from './components/ui/dropdownnav/dropdownnav.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatCardModule } from '@angular/material/card';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    
    routingComponent,
    ButtonComponent,
    AddpostComponent,
    BackdropComponent,
    ModalComponent,
    NavbarComponent,
    DropdownnavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
