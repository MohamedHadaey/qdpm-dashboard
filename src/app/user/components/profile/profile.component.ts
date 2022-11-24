import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  toggle() {
      $("#wrapper").toggleClass("toggled");
    };


}
