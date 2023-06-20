import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './student-home/student-home.component';

const routes: Routes = [
  {path: "studenthome", component:StudentHomeComponent},
  {path: "", redirectTo:"studenthome", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
