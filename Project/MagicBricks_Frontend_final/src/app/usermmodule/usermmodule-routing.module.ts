import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ResultpageComponent } from './resultpage/resultpage.component';
import { PostpropertyComponent } from './postproperty/postproperty.component';

const routes: Routes = [
  {
    path: 'postproperty',
    component: PostpropertyComponent,
  },
  {
    path: 'serchresult',
    component: ResultpageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsermmoduleRoutingModule {}
