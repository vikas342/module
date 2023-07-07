import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { getproductsreducers } from './store/Reucer';
import { ApiService } from './services/api.service';
import { dataeffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({products:getproductsreducers}, {}),
    EffectsModule.forRoot([dataeffects,ApiService]),
    StoreDevtoolsModule.instrument({ name:'practice2' }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
