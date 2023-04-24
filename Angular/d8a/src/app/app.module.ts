import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { As1Component } from './html/as1/as1.component';
import { As2Component } from './html/as2/as2.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent,
    CssComponent,
    JsComponent,
    As1Component,
    As2Component,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
