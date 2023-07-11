import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editproperty',
  templateUrl: './editproperty.component.html',
  styleUrls: ['./editproperty.component.css']
})
export class EditpropertyComponent implements OnInit {


  pid!:number;
  constructor(private api:ApiService,private dataserv:DataService) { }

  ngOnInit() {

   this.pid= this.dataserv.editPropid;
   console.log(this.pid);
  }

}
