import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';

import { HtmlAs1Component } from './html/html-as1/html-as1.component';
import { HtmlAs2Component } from './html/html-as2/html-as2.component';
import { CssComponent } from './css/css.component';
import { JsComponent } from './js/js.component';
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






const routes: Routes = [
  {
    path:'',
    component:BaseComponent

  },
  {
    path:'html',
    component:HtmlComponent,
    children:[
   {
    path:'as1',
    component:HtmlAs1Component
   },
   {
    path:'as2',
    component:HtmlAs2Component
   }
    ]

  },
  {
    path:'css',

    component:CssComponent,
    children:[
      {
        path:'day1',
        children:[
          {
            path:'as1',
            component:CssD1As1Component
          },
          {
            path:'as2',
            component:CssD1As2Component
          },

      {
        path:'as3',
        component:CssD1As3Component
      }
        ]
      },
      {
        path:'day2',
        children:[
          {
            path:'as1',
            component:CssD2As1Component
          },
          {
            path:'as2',
            component:CssD2As2Component
          },

      {
        path:'as3',
        component:CssD2As3Component
      },
      {
        path:'as4',
        component:CssD2As4Component
      },
      {
        path:'as5',
        component:CssD2As5Component
      }
      , {
        path:'as6',
        component:CssD2As6Component
      }
        ]
      }
    ]
  },

  {
    path:'js',

    component:JsComponent,
    children:[
      {
        path:'day1/as1',
        component:JsD1As1Component
      },
      {
        path:'day2/as1',
        component:JsD2As1Component
      },
      {
        path:'day3/as1',
        component:JsD3As1Component
      },
      {
        path:'day4/as1',
        component:JsD4As1Component
      },
      {
        path:'day5/as1',
        component:JsD5As1Component
      },
      {
        path:'day6/as1',
        component:JsD6As1Component
      }
    ]



  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
