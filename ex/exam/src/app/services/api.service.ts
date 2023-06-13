import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  //get all ccategories
  getcat(){
   return this.http.get<any>("https://localhost:7274/api/Category/categories");
  }



  //get all sub ategories
  getsubcat(){
    return  this.http.get<any>("https://localhost:7274/api/Subcategory");
  }



  //post product
  postproduct(formdata:any){
    return this.http.post<any>("https://localhost:7274/api/product/post",formdata)}


    //get all post

    getallposts(){
      return this.http.get<any>("https://localhost:7274/api/product");
    }
}
