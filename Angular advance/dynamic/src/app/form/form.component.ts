import { Component, OnInit } from '@angular/core';
import { DynamicFormModel, DynamicFormService } from '@ng-dynamic-forms/core';
import { My_Form_Model } from '../model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  formmodel:DynamicFormModel=My_Form_Model;
  formgroup!:FormGroup;

  constructor(private fservice: DynamicFormService){

  }

  ngOnInit(): void {
    this.formgroup=this.fservice.createFormGroup(this.formmodel)

  }
}
