import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data!:any[];

  constructor() { }

  putdata(data:any){
    this.data=data;
   // console.log("Data is "+this.data);
    console.warn(data);
    this.parsingdata(data)
    localStorage.setItem('searcheddata', JSON.stringify(data));

  }

  getdata(){

    const data = localStorage.getItem('searcheddata');
    return data ? JSON.parse(data) : null;

    // return this.data;
  }






  //for pasing json data
  parsingdata(data: any) {
    for (let i of this.data) {
      if (i.imageUrl) {
        let x = JSON.parse(i.imageUrl);

        i.imageUrl = x;
      }
      if (i.prop_amenities) {
        let x = JSON.parse(i.prop_amenities);

        i.prop_amenities = x;
      }
    }
  }
}