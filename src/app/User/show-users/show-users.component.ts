import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../Service/user-service.service';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
  name="Users";

  users:User[];
  constructor(private service:UserServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsers()
    .subscribe(data=>{
      this.users=data;
    });
  }

  editUser(user:User):void{
    localStorage.setItem("id",user.id+"");
    this.router.navigate(["editUser"]);
  }
  delete(user:User):void{
    var r = confirm("Realmente quieres eliminar?");
    if(r == true){
      this.service.deleteUser(user)
      .subscribe(data=>{
        this.users=this.users.filter(u=>u!==user);
      });
    }
  }

}
