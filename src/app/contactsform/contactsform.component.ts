import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { ContactsService } from '../Services/contacts.service';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-contactsform',
  standalone: true,
  imports: [MatDialogModule,ReactiveFormsModule,CommonModule,MatButtonModule,MatInputModule],
  templateUrl: './contactsform.component.html',
  styleUrl: './contactsform.component.css'
})
export class ContactsformComponent implements OnInit {
  readonly data = inject(MAT_DIALOG_DATA)
  readonly ContactService = inject(ContactsService)
  readonly dialogRef = inject(MatDialogRef<ContactsformComponent>)

  form : FormGroup=new FormGroup({fullName:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    adress:new FormControl()})
  ngOnInit(): void {
    if(this.data){
      this.ContactService.GetContactsById(this.data).subscribe((contact:any)=>{
        this.form=new FormGroup({
          fullName:new FormControl(contact.fullName),
          email:new FormControl(contact.email),
          phone:new FormControl(contact.phone),
          adress:new FormControl(contact.adress)})
      })
    }
  }
  save(){
    if(this.data){
      this.ContactService.EditContacts(this.form.value,this.data).subscribe(()=>{
        this.dialogRef.close(true)
      })
    }else{
      this.ContactService.PostContacts(this.form.value).subscribe(()=>{
        this.dialogRef.close(true)
    })
  }
}
}
