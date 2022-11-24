import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPassComponent } from './auth/components/forget-pass/forget-pass.component';
import { LoginComponent } from './auth/components/login/login.component';
import { VarifyPassComponent } from './auth/components/varify-pass/varify-pass.component';
import { AuthGuard } from './auth/services/auth.guard';
import { CalenderComponent } from './menu/components/calender/calender.component';
import { FavouritesComponent } from './menu/components/favourites/favourites.component';
import { MainComponent } from './menu/components/main/main.component';
import { ProjectsComponent } from './menu/components/projects/projects.component';
import { ReportsComponent } from './menu/components/reports/reports.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchComponent } from './shared/components/search/search.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { MessagesComponent } from './user/components/messages/messages.component';
import { ProfileComponent } from './user/components/profile/profile.component';


const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path:"home", component: MainComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"calender", component: CalenderComponent},
  {path:"favourites", component: FavouritesComponent},
  {path:"reports", component: ReportsComponent},
  {path:"login", component: LoginComponent},
  {path:"varify-pass", component: VarifyPassComponent},
  {path:"forget-pass", component: ForgetPassComponent},
  {path:"profile", component: ProfileComponent},
  {path:"messages", component: MessagesComponent},
  {path:"navbar", component: NavbarComponent},
  {path:"Search", component: SearchComponent},
  {path:"slider", component: SliderComponent},
  {path:"**" , redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
