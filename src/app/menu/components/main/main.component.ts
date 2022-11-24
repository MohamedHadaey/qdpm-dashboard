import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  toggle() {
    $("#wrapper").toggleClass("toggled");
  };

}
