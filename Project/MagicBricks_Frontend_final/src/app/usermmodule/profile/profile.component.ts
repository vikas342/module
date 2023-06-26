import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{

  constructor(private apiServ:ApiService){

  }
  userdetails:any[]=[];
  userlistings:any[]=[];
  ngOnInit(){

    this.apiServ.getuserdetail().subscribe(res=>{
      this.userdetails=res;
    })

    this.apiServ.getuserlisting().subscribe(res=>{
      this.userlistings=res;
    })
  }
}
