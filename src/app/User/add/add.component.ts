import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../Service/user-service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddUserComponent implements OnInit {
  user:User = new User();
  constructor(private router:Router,private service: UserServiceService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.service.createUser(this.user)
    .subscribe(data=>{
      alert('Success');
      this.router.navigate(["showUsers"]);
    });
  }

}
