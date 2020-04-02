import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { PersonServiceService } from 'src/app/Service/person-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddPersonComponent implements OnInit {  
  nameTitle="New Person";
  
  person:Person= new Person();
  constructor(private service:PersonServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  addPerson(){
    this.service.createPerson(this.person)
    .subscribe(data=>{
      alert('Registerd!!!');
      this.router.navigate(['showPersons']);
    });
  }
}
