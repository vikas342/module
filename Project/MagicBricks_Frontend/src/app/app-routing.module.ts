import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructureLogRegComponent } from './structure-log-reg/structure-log-reg.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

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
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
