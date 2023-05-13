import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { GaurdGuard } from './gaurd.guard';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    canActivate:[GaurdGuard]
  },
  {
    path: 'lists',
    component:ListComponent,
    canActivate:[GaurdGuard]

  }, {
    path: 'login',
    component:LoginComponent

  },
  {
    path: '',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
