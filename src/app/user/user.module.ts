import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProfileComponent,
    MessagesComponent
  ]
})
export class UserModule { }
