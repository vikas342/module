import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
  title = 'reactive_form';

  form_data!:FormGroup;

  arr:Array<Object>=[];


  ngOnInit() {
    this.form_data=new FormGroup({
      fn:new FormControl(),
      ln:new FormControl()

    })

  }

  add(){
    this.arr.push(this.form_data.value);
    console.log(this.arr);
  }
}
