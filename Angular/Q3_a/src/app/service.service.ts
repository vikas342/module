import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get<Array<object>>('../assets/data.json');
  }
  dropDwndata(){
    return this.http.get<Array<object>>('../assets/drop.json') ;
  }
}

