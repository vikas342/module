import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


    constructor(private http: HttpClient,private router:Router) { }

    userlogedin:boolean=false;
    userid!:number;
    role!:string;


    postdata(formdata:any){
      return this.http.post('https://localhost:7210/api/Auth/register',formdata)


     };



     logindata(formdata:any){
       return this.http.post('https://localhost:7210/api/Auth/login',formdata)


      };

      storetoken(tokenValue:any){
        this.userlogedin=true;
        let data= tokenValue.token;
        this.role=tokenValue.role;
        this.userid=tokenValue.uid;
        localStorage.setItem('token',data);
      }
      gettoken(){
        return localStorage.getItem('token');
      }

      logout(){
        this.userlogedin=false;

        localStorage.clear();
        this.router.navigateByUrl("");
      }

    // postdata(formdata:any){
    //   this.http.post('https://localhost:7210/api/Auth/register',formdata).subscribe(x=>{
    //     console.log(x);
    //   },
    //   (error)=>{console.log(error)}
    //   )
    // };
}
