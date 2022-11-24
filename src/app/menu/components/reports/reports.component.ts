import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    $("#wrapper").toggleClass("toggled");
  };

}
