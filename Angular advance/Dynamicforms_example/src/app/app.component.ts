import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormReturnService } from './services/form-return.service';
import { FormDataService } from './services/form-data.service';
import { FormGroup } from '@angular/forms';
import { InputGenric } from './Models/question.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  payLoad = '';
  form!: FormGroup;

  inputdata:InputGenric<string>[]|null=[];
  constructor(private data:FormDataService, private group:FormReturnService){
     this.data.getControlData().subscribe(control =>{
      this.inputdata = control;
     })
  }


  ngOnInit() {
    this.form = this.group.formGroups(this.inputdata as InputGenric<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    
  }
}
