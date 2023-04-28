import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CheckService } from './check.service';
import { HomeComponent } from './home/home.component';
import { LogingGaurdGuard } from './loging-gaurd.guard';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
