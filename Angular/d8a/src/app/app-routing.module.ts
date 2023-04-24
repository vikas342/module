import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { As1Component } from './html/as1/as1.component';
import { As2Component } from './html/as2/as2.component';


const routes: Routes = [
  {
    path:'html/as1',
    component:As1Component
  }
  ,  {
    path:'html/as2',
    component:As2Component
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
