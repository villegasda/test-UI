import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejmplo';
  constructor(private router:Router){}
  showUsers(){
    this.router.navigate(["showUsers"]);
  }
  newUser(){
    this.router.navigate(["addUser"]);
  }
}
