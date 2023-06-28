import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { StructureLogRegComponent } from './structure-log-reg/structure-log-reg.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UsermmoduleModule } from './usermmodule/usermmodule.module';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    StructureLogRegComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminmoduleModule,
    UsermmoduleModule


  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
