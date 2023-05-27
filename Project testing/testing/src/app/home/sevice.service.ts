import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeviceService {

  constructor(private serv: HttpClient) {}


  getdata() {
    return this.serv.get<Array<any>>(
      'https://localhost:7119/WeatherForecast'
    );
  }
}
