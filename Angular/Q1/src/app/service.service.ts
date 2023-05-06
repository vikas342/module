import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './data_interface';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private api:HttpClient) {

  }
  data:data[]=[];
  getdata(){


   return this.api.get<Array<data>>('../assets/Movies.json')

  }

}
