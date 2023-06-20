import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "admin", loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule) },
  { path: "student", loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: "orders", loadChildren: () => import('./Orders/orders.module').then(m => m.OrdersModule) },
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
