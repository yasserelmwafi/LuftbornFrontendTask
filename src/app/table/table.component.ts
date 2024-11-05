import { Component, inject, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ContactsService } from '../Services/contacts.service';
import { ContactsformComponent } from '../contactsform/contactsform.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule,MatButtonModule,MatDialogModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  readonly ContactService = inject(ContactsService)
  readonly Diaglog = inject(MatDialog)
  displayedColumns: string[] = ['fullName', 'email', 'phone', 'adress', 'Edit','Delete'];
  dataSource = [];
  
  ngOnInit(): void {
    this.GetContacts()
  }

  GetContacts(){
    this.ContactService.GetContacts().subscribe((Contacts:any)=>{
      this.dataSource=Contacts
    })
  }

  Add(){
    this.Diaglog.open(ContactsformComponent).afterClosed().subscribe(()=>{ this.GetContacts()})
  }

  Edit(Contact:any){
    this.Diaglog.open(ContactsformComponent,{data:Contact.id}).afterClosed().subscribe(()=>{ this.GetContacts()})
  }

  Delete(contact:any){
    this.ContactService.DeleteContacts(contact.id).subscribe(()=>{ this.GetContacts()})
  }
}

