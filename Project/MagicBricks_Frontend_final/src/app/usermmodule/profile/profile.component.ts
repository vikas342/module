import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{

  constructor(private apiServ:ApiService,private dataserv:DataService,private route:Router){

  }
  userdetails:any[]=[];
  userlistings:any[]=[];
  ngOnInit(){

    this.apiServ.getuserdetail().subscribe(res=>{
      this.userdetails=res;
    })

    this.apiServ.getuserlisting().subscribe(res=>{
      this.userlistings=this.dataserv.dataparser(res);
    })
  }


  propview(pid:number){

    // console.log("object");
     this.dataserv.setpid(pid)
 this.route.navigateByUrl('/propertyview')
  }


  deleteListing(pid:number){



    this.apiServ.deleteProperty(pid).subscribe((x)=>{
      alert("property deleted sucessfully");

    this.apiServ.getuserlisting().subscribe(res=>{
      this.userlistings=this.dataserv.dataparser(res);
    })
    })

  }


  editListing(pid:number){

    this.dataserv.editPropid=pid;
    // localStorage.setItem('editPropId',pid.toString())
    localStorage.setItem('pid',pid.toString())

    this.route.navigateByUrl('/editproperty')

  }

}
