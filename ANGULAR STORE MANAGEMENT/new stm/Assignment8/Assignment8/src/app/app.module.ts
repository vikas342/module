import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { GetProductReducer } from './Store/product.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductEffects } from './Products.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([ProductEffects,ProductService]),
    StoreModule.forRoot({products:GetProductReducer}, {}),
    StoreDevtoolsModule.instrument({name:'assignment8'}),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
