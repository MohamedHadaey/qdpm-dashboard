import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MainComponent,
    ProjectsComponent,
    CalenderComponent,
    FavouritesComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  exports: [
    MainComponent,
    ProjectsComponent,
    FavouritesComponent,
    CalenderComponent,
    ReportsComponent,
  ]
})
export class MenuModule { }
