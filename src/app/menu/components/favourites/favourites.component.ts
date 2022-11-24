import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  toggle() {
    $("#wrapper").toggleClass("toggled");
  };

}
