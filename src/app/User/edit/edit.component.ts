import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditUserComponent implements OnInit {

  user:User = new User();
  constructor(private router:Router,private service:UserServiceService) { }

  ngOnInit(): void {
    this.editU();
  }
  editU(){
    let id = localStorage.getItem("id");
    this.service.getUserId(+id)
    .subscribe(data=>{
      this.user=data;
    });
  }
  edit(user:User){
    this.service.updateUser(user)
    .subscribe(data=>{
      this.user = data;
      alert('Modificado con exito!!');
      this.router.navigate(["showUsers"]);
    });
  }

}
