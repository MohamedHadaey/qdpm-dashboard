import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {



  }


  filterForm: FormGroup = new FormGroup({
    project_type: new FormControl('1', [
      Validators.required,
      Validators.min(1),
      Validators.max(200),
     ]),
     now_check: new FormControl("checked", [
      Validators.required,
     ]),
     complete_check: new FormControl(false, [
      Validators.required,
     ]),

     late_check: new FormControl(false, [
      Validators.required,
     ]),

     end_check: new FormControl("checked", [
      Validators.required,
     ]),

     not_check: new FormControl(false, [
      Validators.required,
     ]),
     project_start: new FormControl(null, [
      Validators.required,
     ]),
     project_end: new FormControl(null, [
      Validators.required,
     ]),
     task_range: new FormControl(null, [
      Validators.required,
     ]),
     constructor_range: new FormControl(null, [
      Validators.required,
     ])


  });



  submitFilterForm(filterForm: FormGroup) {
   // console.log(filterForm.value)
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



  // this function to log out
  logOut() {
    this._AuthService.logout();
  }
}
