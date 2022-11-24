import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    $("#wrapper").toggleClass("toggled");
  };
}
