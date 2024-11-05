import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url="https://localhost:7295/api/Contacts"
  constructor(private http:HttpClient) { }
  GetContacts(){
    return this.http.get(this.url)
  }
  PostContacts(Contact:any){
    return this.http.post(this.url,Contact)
  }
  GetContactsById(id:string){
    return this.http.get(`${this.url}/${id}`)
  }
  EditContacts(Contact:any,id:string){
    return this.http.put(`${this.url}/${id}`,Contact)
  }
  DeleteContacts(id:string){
    return this.http.delete(`${this.url}/${id}`)
  }
}
