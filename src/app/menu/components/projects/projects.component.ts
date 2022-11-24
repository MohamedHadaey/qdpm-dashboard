import { Component, OnInit  } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


constructor() {}



  ngOnInit(): void {

  }

  toggle() {
    $("#wrapper").toggleClass("toggled");
  };

}
