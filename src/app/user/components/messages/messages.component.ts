import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
declare const $: any;

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messageDate:any;
  show:boolean= false;
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {


  }


   // for responsive toggle sidebar
   toggle(){
    if ($(".sidebar").css("width") == "220px"){
      $(".sidebar").css("width" , "55px");
      $(".sidebar li span").fadeOut(0);
       $(".content-body").css("padding-right" , "55px");
    }else {
      $(".sidebar").css("width" , "220px");
      $(".content-body").css("padding-right" , "220px");
      $(".sidebar li span").fadeIn(1500);
    }
  }



  // this function to log out
  logOut() {
    this._AuthService.logout();
  }

  // show details of any message
  showDetails() {
    $("#message-details").fadeIn()
    $("#message-details").css("display" , "flex");
    // $(".list ul li").css("background-color" , "#F3F5FD")
  }
}
