import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { PersonServiceService } from 'src/app/Service/person-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showpersons',
  templateUrl: './showpersons.component.html',
  styleUrls: ['./showpersons.component.scss']
})
export class ShowpersonsComponent implements OnInit {
  name="Person";
  persons:Person[];
  constructor(private service:PersonServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersons()
    .subscribe(data=>{
      this.persons=data;
    });
  }
  editPerson(person:Person){
    localStorage.setItem("id",person.id+"");
    this.router.navigate(["editPerson"]);
  }
  delete(person:Person){
    var r = confirm("Realmente quieres eliminar?");
    if(r == true){
      this.service.deletePerson(person)
      .subscribe(data=>{
        this.persons=this.persons.filter(p=>p!==person);
      });
    }
  }

}
