import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogingGaurdGuard } from './loging-gaurd.guard';
import { SigninComponent } from './signin/signin.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [

  {
    path:'feed',
    component:PostsComponent,
    canActivate:[LogingGaurdGuard]
  },
  {
    path:'profile',

    component:HomeComponent
  } ,{
    path:'',
    component:SigninComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
