import { Injectable } from '@angular/core';
import { CONTACTS } from './import-contacts';
import { Contact } from './contact-us/Contact/contact-class';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ContactService {

  constructor(private messageService: MessageService) { }


  getContacts(): Observable<Contact[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('ContactService: fetched contacts');
    return of(CONTACTS);
  }
}
