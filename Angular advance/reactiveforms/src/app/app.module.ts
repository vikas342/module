import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { FormstestingComponent } from './formstesting/formstesting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, FormstestingComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, BrowserAnimationsModule,MatGridListModule,
    MatSlideToggleModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
