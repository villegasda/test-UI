import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { Router } from '@angular/router';
import { PersonServiceService } from 'src/app/Service/person-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditPersonComponent implements OnInit {
  selectedFile: File = null;
  person:Person=new Person();
  name="Edit Person";

  constructor(private router:Router, private service:PersonServiceService,
    private pipe:DatePipe) { }
  ngOnInit(): void {
    this.editPerson();
  }

  editPerson(){
    let id = localStorage.getItem("id");
    this.service.getPersonId(+id)
    .subscribe(data=>{
      this.person=data;
    });
  }
  updatePerson(person:Person){
    this.service.updatePerson(person)
    .subscribe(data=>{
      this.person=data;
      alert('Updated Person');
      this.router.navigate(['showPersons']);
    });
  }

  upload(person:Person){
    //let id = localStorage.getItem("id");
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.service.uploadImage(fd, person)
    .subscribe(data=>{
      this.router.navigate(["showPersons"]);
    });  
  }
  selecionarImagen(event) {
    this.selectedFile = <File>event.target.files[0];
  }
}
