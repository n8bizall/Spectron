import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact/contact-class';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

contacts: Contact[];
selectedContact: Contact;
  contact: Contact = {
    name: 'Lana Bucher',
    phone: '(937) 461-5683',
    email: 'Lana@Spectroninc.com'
  };
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => this.contacts = contacts);
  }
}
