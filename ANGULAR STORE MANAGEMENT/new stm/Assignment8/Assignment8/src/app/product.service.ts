import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from './model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getall():Observable<Array<products>>{
    return this.http.get<Array<products>>('https://localhost:7102/api/Product/Productlist')
  }
  adddata(payload:any):Observable<products>{
    return this.http.post<products>('https://localhost:7102/api/Product/Productlist',payload)
  }
  deletedata(id:number):Observable<products>{
    return this.http.delete<products>('https://localhost:7102/api/Product/Productlist/'+id)
  }
}
