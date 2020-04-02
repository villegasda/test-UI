import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowUsersComponent } from './User/show-users/show-users.component';
import { AddUserComponent } from './User/add/add.component';
import { EditUserComponent } from './User/edit/edit.component';
import { ShowpersonsComponent } from './Person/showpersons/showpersons.component';
import { AddPersonComponent } from './Person/add/add.component';
import { EditPersonComponent } from './Person/edit/edit.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"showUsers",component:ShowUsersComponent},
  {path:"addUser",component:AddUserComponent},
  {path:"editUser",component:EditUserComponent},
  {path:"showPersons", component:ShowpersonsComponent},
  {path:"addPerson", component:AddPersonComponent},
  {path:"editPerson", component:EditPersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
