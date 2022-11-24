import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  visible: boolean = true;
  changeType: boolean = true;
  constructor( private _AuthService: AuthService,
    private _Router: Router) {

    }



  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.min(5),
      Validators.max(20)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    checker: new FormControl(null, [
      Validators.required,
      Validators.requiredTrue
    ])
  });

  submitLoginForm(loginForm: FormGroup) {
    // console.log(loginForm.value)
    // if user delete [disabled]="registerForm.invalid" from html inspect
    if (loginForm.invalid) {
      return;
    } else {
      this._Router.navigate(['/varify-pass']);
    }
    this.loginForm.reset();
  }


  ngOnInit(): void {
  }


   // this function to show and hide password
   viewPassword() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
}
