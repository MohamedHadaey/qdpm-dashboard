import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-varify-pass',
  templateUrl: './varify-pass.component.html',
  styleUrls: ['./varify-pass.component.scss']
})
export class VarifyPassComponent implements OnInit {
  // visible: boolean = true;
  // changeType: boolean = true;
  numbers = new Array(4);
  code: any = '';
  // data: any = { phone: this._AuthService.phoneChangePass, code: 2 };
  constructor( private _AuthService: AuthService,
    private _Router: Router) {

    }

  ngOnInit(): void {
  }

  varifyForm: FormGroup = new FormGroup({
    code1: new FormControl(null, [Validators.required]),
    code2: new FormControl(null, [Validators.required]),
    code3: new FormControl(null, [Validators.required]),
    code4: new FormControl(null, [Validators.required]),
  });

  submitVarifyForm(varifyForm: FormGroup) {
    this.code = Number(
      `${varifyForm.value.code1}${varifyForm.value.code2}${varifyForm.value.code3}${varifyForm.value.code4}`
    );


    if (varifyForm.invalid) {
      return;
    } else {
      this._Router.navigate(['/home']);
    }


    // console.log(this.code)
    // this.varify(this.code);
    // this._AuthService.confirmCode(this.data).subscribe((response) => {
    //   if (response.status == 200) {
    //     this.toastr.success(response.msg);
    //     this._Router.navigate(['/account/newpassword']);
    //   } else {
    //     this._HomesService.hideLoader();
    //     this.toastr.error(response.msg);
    //   }
    // });
    this.varifyForm.reset();
  }

  // varify(code: any) {
  //   this.data.code = code;
  // }

  // this is the best method to handle the code inputs in angular
  move(e: any, p: any, c: any, n: any) {
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if (length == maxlength) {
      if (n != '') {
        n.focus();
      }
    }
    if (e.key == 'Backspace') {
      if (p != '') {
        p.focus();
      }
    }
  }

}
