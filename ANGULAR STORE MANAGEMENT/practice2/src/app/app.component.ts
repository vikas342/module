import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetapiData, GetapiDataSuccess } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice2';

  data:any;
  constructor(private store:Store){
    this.data=this.store.dispatch(GetapiData())
  }
  ngOnInit(): void {


    console.log(this.data)

  }

}
