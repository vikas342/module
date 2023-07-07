import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    redirectTo:'signin',
    pathMatch:'full'
  },
  {
    path:'posts',
    loadChildren:()=> import('../app/posts/posts.module').then(m=>m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
