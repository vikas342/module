import { Injectable } from '@angular/core';
import { posts } from '../model/posts.mode';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  userlogedin:boolean=false;
  data:any[]=[
    {email: 'vsonwane3660@gmail.com', uname: 'vikas', password: 'Vikas@01'}
  ]

  userspost:posts[]=[
    {uname: 'vikas', caption: 'dfghj', imageurl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'}






  ]
  constructor() { }

  userstatus(){

  }


  loggedin_userdetails(userdata:any){
    localStorage.setItem('user',JSON.stringify(userdata))
  }
  getloggedin_userdetails(){
   var z=(localStorage.getItem('user'))
   var x=JSON.parse(z !)
    return x
  }



}
