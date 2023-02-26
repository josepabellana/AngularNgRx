import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addContact, decrement, reset } from '../contact/store/contact.actions';
import { Contact } from '../contact/types/contact.interface';
import {ContactStateInterface} from '../contact/types/contactState.interface'
@Component({
  selector: 'app-table-contact',
  templateUrl: './table-contact.component.html',
  styleUrls: ['./table-contact.component.css']
})
export class TableContactComponent implements OnInit {
  public contacts$: Observable<any>;
  constructor(private store: Store<{ contacts: ContactStateInterface }>) {
    this.contacts$ = store.select('contacts');
    console.log(this.contacts$)
   }

  ngOnInit(): void {
  }

}
