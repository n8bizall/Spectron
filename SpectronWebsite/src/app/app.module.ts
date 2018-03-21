import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactService } from './contact.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';



@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    ContactDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContactService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
