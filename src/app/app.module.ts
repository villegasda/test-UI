import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Importar para usar las clases de User
import { AddUserComponent } from './User/add/add.component';
import { EditUserComponent } from './User/edit/edit.component';
import { ShowUsersComponent } from './User/show-users/show-users.component';
// si o si importar estos 3 modulos
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './Service/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowpersonsComponent } from './Person/showpersons/showpersons.component';
import { EditPersonComponent } from './Person/edit/edit.component';
import { AddPersonComponent } from './Person/add/add.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { HomeComponent } from './home/home.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    ShowUsersComponent,
    ShowpersonsComponent,
    AddPersonComponent,
    EditPersonComponent,
    MainNavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserServiceService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
