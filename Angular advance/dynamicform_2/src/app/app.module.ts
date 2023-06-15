import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {

  registerForm!: FormGroup;

  fileds!:any[];

  model={

    name:'',
    email:''
  }

  getformfields(){
    const formfields:any={};
    for(let x of Object.keys(this.model)){

      formfields[x]=new FormControl("");

      this.fileds.push(x);

    }
    return formfields;

  }


  buildForm() {
    const formGroupFields = this.getformfields();
    this.registerForm = new FormGroup(formGroupFields);
  }

ngOnInit(): void {

  this.buildForm();
}

}
