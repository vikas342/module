import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ProductviewComponent } from './productview/productview.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
    path:'adminhome',
    component:AdminhomeComponent
  }, {
    path:'userhome',
    component:UserhomeComponent
  }, {
    path:'addproduct',
    component:AddproductsComponent
  }, {
    path:'products',
    component:ProductviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
