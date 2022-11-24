import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  toggle() {
    $("#wrapper").toggleClass("toggled");
  };
}
