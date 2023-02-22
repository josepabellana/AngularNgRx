import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contactForm = this.fb.group({
    firstName: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    lastName: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    phone: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
    email: ['', [Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]], // TODO: Add second password (check typed correctly)
    address: ['', [Validators.required]]
  })





  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const { firstName, lastName, phone, email, address } = this.contactForm.value;
    console.log(firstName, lastName, phone, email, address)
  }
}
