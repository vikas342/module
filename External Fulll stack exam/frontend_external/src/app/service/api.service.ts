import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private auth:AuthService) { }



  //categories

  getcategories(){
    return this.http.get<any>("https://localhost:7215/api/Product/getcategories");
  }

  //get subcategories
  getsubcategories(id:number){
    return this.http.get<any>("https://localhost:7215/api/Product/getsubcategories/"+id);
  }



  //list all product

  getlist(){
    return this.http.get<any>("https://localhost:7215/api/Product");
  }



  //post product


  postProduct(formdata:any){

    return this.http.post("https://localhost:7215/api/Product",formdata);
  }



  //editproduct

  editproduct(formdata:any){
    return this.http.put<any>("https://localhost:7215/api/Product",formdata);
  }



  //delete product

  deleteproduct(id:number){
    return this.http.put<any>("https://localhost:7215/api/Product/deleteproduct/"+id,null);
  }




}
