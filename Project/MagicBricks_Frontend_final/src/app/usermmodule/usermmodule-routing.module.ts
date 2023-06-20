import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {

    path:'profile',component:ProfileComponent
  },

  {

    path:'home',component:HomeComponent
  },
  {
    path:'',redirectTo:"home",pathMatch:"full"
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermmoduleRoutingModule { }
