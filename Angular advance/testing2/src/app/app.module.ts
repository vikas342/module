import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClacComponent } from './clac/clac.component';

@NgModule({
  declarations: [
    AppComponent,
    ClacComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


age!:number;
result!:number;



  calculate(){
    this.result=this.age*365;
  }

}
