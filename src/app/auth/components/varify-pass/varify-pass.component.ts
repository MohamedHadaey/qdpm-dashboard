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
  visible: boolean = true;
  changeType: boolean = true;
  constructor( private _AuthService: AuthService,
    private _Router: Router) {

    }

  ngOnInit(): void {
  }

}
