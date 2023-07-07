import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../model/model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getdata():Observable<products[]>{
    return this.http.get<products[]>('https://localhost:7102/api/Product/Productlist')
  }

}
