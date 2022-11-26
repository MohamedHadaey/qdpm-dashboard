import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  map:boolean = true;
  list:boolean = true;
  card:boolean = true;
  showen:string = "maps";
  constructor() { }

  ngOnInit(): void {
  }

  showFav() {
    this.map =! this.map;
    this.list =! this.list;
    this.card =! this.card;
  }


  // show list theme
  showList() {
    $("#list").addClass("active-theme");
    $("#map").removeClass("active-theme");
    $("#card").removeClass("active-theme");
    this.showen = "lists";
  }

  // show list theme
  showMap() {
    $("#map").addClass("active-theme");
    $("#list").removeClass("active-theme");
    $("#card").removeClass("active-theme");
    this.showen = "maps";

  }

      // show list theme
  showCard() {
    $("#card").addClass("active-theme");
    $("#map").removeClass("active-theme");
    $("#list").removeClass("active-theme");
    this.showen = "cards";

  }

  // for responsive toggle sidebar
  toggle(){
    if ($(".sidebar").css("width") == "220px"){
      $(".sidebar").css("width" , "55px");
      $("li span").fadeOut(0);
       $(".content-body").css("padding-right" , "55px");
    }else {
      $(".sidebar").css("width" , "220px");
      $(".content-body").css("padding-right" , "220px");
      $("li span").fadeIn(1500);
    }
  }
}
