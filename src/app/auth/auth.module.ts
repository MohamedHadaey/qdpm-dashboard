import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { VarifyPassComponent } from './components/varify-pass/varify-pass.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';



@NgModule({
  declarations: [
    LoginComponent,
    VarifyPassComponent,
    ForgetPassComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
