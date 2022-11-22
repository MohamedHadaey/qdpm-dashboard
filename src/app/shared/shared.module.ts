import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SearchComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SearchComponent,
    SliderComponent
  ]
})
export class SharedModule { }
