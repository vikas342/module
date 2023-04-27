import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogingGaurdGuard } from './loging-gaurd.guard';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'',
    component:SigninComponent
  },
  {
    path:'home',

    component:HomeComponent,
    canActivate:[LogingGaurdGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
