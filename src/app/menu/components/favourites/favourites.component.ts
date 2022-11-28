import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
declare const $: any;

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {

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

  
  // this function to log out
  logOut() {
    this._AuthService.logout();
  }
}
