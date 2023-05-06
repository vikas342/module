import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';

const routes: Routes = [

  {
    path:'exam',
    component:ExamComponent
  },
  {
    path:'',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
