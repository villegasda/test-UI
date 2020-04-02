import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Model/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http:HttpClient) { }
  Url="http://localhost:8080/person";
  getPersons(){
    return this.http.get<Person[]>(this.Url);
  }
  getPersonId(id:number){
    return this.http.get<Person>(this.Url+"/"+id);
  }
  createPerson(person:Person){  
    person.createdAt= new Date();  
    return this.http.post<Person>(this.Url,person);
  }
  updatePerson(person:Person){
    person.updateAt=new Date();
    return this.http.put<Person>(this.Url+"/"+person.id,person);
  }
  deletePerson(person:Person){
    return this.http.delete<Person>(this.Url+"/"+person.id);
  }
  uploadImage(imagen:FormData,person:Person){
    return this.http.post<Person>(this.Url+"/"+person.id+"/image",imagen);
  }
}
