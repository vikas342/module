import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reverse } from './reverse';
import { Roman } from './roman';
import { FormsModule } from '@angular/forms';
import { square } from './square';
import { cubePipe } from './cube';



@NgModule({
  declarations: [
    AppComponent,
    reverse,
    Roman,
    square,
    cubePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
