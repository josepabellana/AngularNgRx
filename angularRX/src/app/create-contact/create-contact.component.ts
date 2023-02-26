import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addContact} from '../contact/store/contact.actions';
import * as ContactActions from '../contact/store/contact.actions';
import { ContactStateInterface } from '../contact/types/contactState.interface';
import { Contact } from '../contact/types/contact.interface';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  contact$: Observable<ContactStateInterface>;
  contactForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    lastName: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    phone: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    email: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]], // TODO: Add second password (check typed correctly)
    address: ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder, private store: Store<{ contacts: ContactStateInterface }>) {
    this.contact$ = this.store.select('contact');
    console.log(this.contacts$)
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    const contact:any = this.contactForm.value;
    console.log(contact)
    this.store.dispatch(ContactActions.addContact({contact:contact}));
    // this.contacts.push({ firstName, lastName, phone, email, address })
    // console.log(this.contacts)
  }
}
