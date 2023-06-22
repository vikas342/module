import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermmoduleRoutingModule } from './usermmodule-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdviceandtoolsComponent } from './adviceandtools/adviceandtools.component';
import { RealestateGuideComponent } from './realestate-guide/realestate-guide.component';
import { FooterComponent } from './footer/footer.component';
import { ResultpageComponent } from './resultpage/resultpage.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    AdviceandtoolsComponent,
    RealestateGuideComponent,
    FooterComponent,
    ResultpageComponent
  ],
  imports: [
    CommonModule,
    UsermmoduleRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class UsermmoduleModule { }
