import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


    constructor(private http: HttpClient) { }

    postdata(formdata:any){
      return this.http.post('https://localhost:7210/api/Auth/register',formdata)


     };



     logindata(formdata:any){
       return this.http.post('https://localhost:7210/api/Auth/login',formdata)


      };

    // postdata(formdata:any){
    //   this.http.post('https://localhost:7210/api/Auth/register',formdata).subscribe(x=>{
    //     console.log(x);
    //   },
    //   (error)=>{console.log(error)}
    //   )
    // };
}
