import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [

  {
    path:'exam',
    component:ExamComponent
  },
  {
    path:'result',
    component:ResultComponent
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
