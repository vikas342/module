import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }




  getdata():Observable<Array<products>>{

    return this.http.get<Array<products>>('https://localhost:7102/api/Product/Productlist')

  }
}

