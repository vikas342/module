import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PostsModule } from './posts/posts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { getreducer } from './posts/posts/reducer';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    ReactiveFormsModule,FormsModule, StoreModule.forRoot({posts:getreducer}, {}), EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({name:'angular_adv'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
