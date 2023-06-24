import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getuserdetail() {
    return this.http.get<any>('https://localhost:7210/api/Users');
  }
  getuserlisting() {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/GetuserPropertylisting'
    );
  }

  getotheruserlisting() {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/GetotheruserPropertylisting'
    );
  }




  //get cities

  getcities() {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/getpropbycities'
    );
  }





  //get proptype

  getproptype() {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/getproptype'
    );
  }





  //navbar BUY/Rent > on click  propertytype  .....data
  //city,ptype,pfor

  getprop_CTF(city: string, proptype: string, propfor: string) {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/getprop_CTF?city=' +
        city +
        '&proptype=' +
        proptype +
        '&propfor=' +
        propfor
    );
  }




  //navbar BUY/Rent > on click  budget  .....data
  //   on click on buy/rent ->budget section    on navbar for budget

  getpropbudget_CFMinMax(
    city: string,
    propfor: string,
    min: number,
    max: number
  ) {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/getpropbudget_CFMinMax?city=' +
        city +
        '&propfor=' +
        propfor +
        '&min=' +
        min +
        '&max=' +
        max
    );
    // https://localhost:7210/api/Property/getpropbudget_CFMinMax?city=Ahmedabad&propfor=sell&min=0&max=123456789
  }







  //homecomponent search api
  // https://localhost:7210/api/Property/allpropserch_CTFMinMax?city=Ahmedabad&proptype=flat&propfor=sell&min=0&max=123456789


  getpropserch_CTFMinMax(  city: string,proptype:string,
    propfor: string,
    min: number,
    max: number){

      return this.http.get<any>("https://localhost:7210/api/Property/allpropserch_CTFMinMax?city="+city+"+&proptype="+proptype+"&propfor="+propfor+"&min="+min+"&max="+max)

  }






  //click on cities and get all properties in that city

  getprop_serchcity(city: string) {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/allpropserch_city?city=' + city
    );
  }
}
