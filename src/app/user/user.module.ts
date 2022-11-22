import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
  declarations: [
    ProfileComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent,
    MessagesComponent
  ]
})
export class UserModule { }
