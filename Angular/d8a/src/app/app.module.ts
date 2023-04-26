import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';


import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
import { HtmlAs1Component } from './html/html-as1/html-as1.component';
import { HtmlAs2Component } from './html/html-as2/html-as2.component';
import { Day1Component } from './css/day1/day1.component';
import { Day2Component } from './css/day2/day2.component';
import { CssD1As1Component } from './css/day1/css-d1-as1/css-d1-as1.component';
import { CssD1As2Component } from './css/day1/css-d1-as2/css-d1-as2.component';
import { CssD1As3Component } from './css/day1/css-d1-as3/css-d1-as3.component';
import { CssD2As1Component } from './css/day2/css-d2-as1/css-d2-as1.component';
import { CssD2As2Component } from './css/day2/css-d2-as2/css-d2-as2.component';
import { CssD2As3Component } from './css/day2/css-d2-as3/css-d2-as3.component';
import { CssD2As4Component } from './css/day2/css-d2-as4/css-d2-as4.component';
import { CssD2As5Component } from './css/day2/css-d2-as5/css-d2-as5.component';
import { CssD2As6Component } from './css/day2/css-d2-as6/css-d2-as6.component';
import { JsD1As1Component } from './js/js-d1-as1/js-d1-as1.component';
import { JsD2As1Component } from './js/js-d2-as1/js-d2-as1.component';
import { JsD3As1Component } from './js/js-d3-as1/js-d3-as1.component';
import { JsD4As1Component } from './js/js-d4-as1/js-d4-as1.component';
import { JsD5As1Component } from './js/js-d5-as1/js-d5-as1.component';
import { JsD6As1Component } from './js/js-d6-as1/js-d6-as1.component';
import { BaseComponent } from './base/base.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent,
    CssComponent,
    JsComponent,
    HtmlAs1Component,
    HtmlAs2Component,
    Day1Component,
    Day2Component,
    CssD1As1Component,
    CssD1As2Component,
    CssD1As3Component,
    CssD2As1Component,
    CssD2As2Component,
    CssD2As3Component,
    CssD2As4Component,
    CssD2As5Component,
    CssD2As6Component,
    JsD1As1Component,
    JsD2As1Component,
    JsD3As1Component,
    JsD4As1Component,
    JsD5As1Component,
    JsD6As1Component,
    BaseComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
