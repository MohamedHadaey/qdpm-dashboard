import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { VarifyPassComponent } from './components/varify-pass/varify-pass.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    VarifyPassComponent,
    ForgetPassComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    VarifyPassComponent,
    ForgetPassComponent
  ]
})
export class AuthModule { }
