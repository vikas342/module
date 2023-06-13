import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private route:Router) { }

  role!:string;
  token!:string;


  //register api
  register(formdata:any){

    return this.http.post("https://localhost:7274/api/Auth/register",formdata);

}

login(formdata:any){
  return this.http.post("https://localhost:7274/api/Auth",formdata);

}

storetoken(tokenValue:any){
  let data= tokenValue.token;
  localStorage.setItem('token',data.value);
  this.token=data.value;
  this.role=tokenValue.role;
  console.log(tokenValue.role)
}
gettoken(){
  return localStorage.getItem('token');
}

logout(){
  localStorage.clear();
  this.route.navigateByUrl("");
}



}
