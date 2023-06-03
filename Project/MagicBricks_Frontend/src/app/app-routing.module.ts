import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureLogRegComponent } from './structure-log-reg/structure-log-reg.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: StructureLogRegComponent,

    children: [
      {
        path: '',

        component: LoginComponent,
      },
      {
        path: 'login',

        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
    ],
  },

  {
    path:'home',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
