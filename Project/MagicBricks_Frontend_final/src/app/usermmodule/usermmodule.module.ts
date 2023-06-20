import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermmoduleRoutingModule } from './usermmodule-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UsermmoduleRoutingModule
  ]
})
export class UsermmoduleModule { }
