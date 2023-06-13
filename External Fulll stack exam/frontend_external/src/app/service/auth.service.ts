import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  token!:any;
  role!:any;

  //registrer user

  register(formdata:any){

    return this.http.post("https://localhost:7215/api/AuthCotroller/register",formdata);

  }



    //login user

    login(formdata:any){

      return this.http.post("https://localhost:7215/api/AuthCotroller/login",formdata);

    }



    savetoken(x:any){
      console.log(x.role);
      console.log(x.token.value);
      this.role=x.role;
      this.token=x.token.value;
      localStorage.setItem('token',this.token);

    }

    gettoken(){
     return localStorage.getItem('token');
    }


    //logoout
    logout(){
      localStorage.clear();
    }
}
