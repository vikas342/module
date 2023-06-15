import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputGenric } from '../Models/question.model';
import { FormReturnService } from '../services/form-return.service';

@Component({
  selector: 'app-dynamicgrops',
  templateUrl: './dynamicgrops.component.html',
  styleUrls: ['./dynamicgrops.component.css']
})
export class DynamicgropsComponent {
  @Input() data: InputGenric<string>[]|null=[];
  form!: FormGroup;
  constructor(private group:FormReturnService){}
  payLoad = ''

  ngOnInit() {
    this.form = this.group.formGroups(this.data as InputGenric<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    
  }
}
