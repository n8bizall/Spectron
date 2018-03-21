import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact/contact-class';
import { CONTACTS } from '../import-contacts';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

Contacts = CONTACTS;
selectedContact: Contact;
  contact: Contact = {
    name: 'Lana Bucher',
    phone: '(937) 461-5683',
    email: 'Lana@Spectroninc.com'
  };
  constructor() { }

  ngOnInit() {
  }
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
