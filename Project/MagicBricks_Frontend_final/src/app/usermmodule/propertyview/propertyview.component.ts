import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-propertyview',
  templateUrl: './propertyview.component.html',
  styleUrls: ['./propertyview.component.css']
})
export class PropertyviewComponent implements OnInit {
  city!:string;
  pid!:number;
  constructor(private dataserv:DataService,private api:ApiService){

  }

ngOnInit(): void {
    this.pid=this.dataserv.getpid();
}

}
