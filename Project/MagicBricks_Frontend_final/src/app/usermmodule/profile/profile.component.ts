import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{

  constructor(private apiServ:ApiService,private datserv:DataService){

  }
  userdetails:any[]=[];
  userlistings:any[]=[];
  ngOnInit(){

    this.apiServ.getuserdetail().subscribe(res=>{
      this.userdetails=res;
    })

    this.apiServ.getuserlisting().subscribe(res=>{
      this.userlistings=this.datserv.dataparser(res);
    })
  }
}
