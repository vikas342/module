import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }

  getuserdetail(){
    return this.http.get<any>('https://localhost:7210/api/Users');
  }
  getuserlisting(){
    return this.http.get<any>('https://localhost:7210/api/Property/GetuserPropertylisting');
  }


  getotheruserlisting(){
    return this.http.get<any>('https://localhost:7210/api/Property/GetotheruserPropertylisting');
  }




}
