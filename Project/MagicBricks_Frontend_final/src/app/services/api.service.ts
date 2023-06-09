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

   //get states

   getstates() {
    return this.http.get<any>(
      'https://localhost:7210/api/Property/getpropbystate'
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


  //get prop_for data

  getprop_for(){
    return this.http.get<any>('https://localhost:7210/api/Property/Propfor')
}


  //get prop_for data

  getprop_amenities(){
    return this.http.get<any>('https://localhost:7210/api/Property/PropAmenities')
}


  //get postedby data

  getprop_postedby(){
    return this.http.get<any>('https://localhost:7210/api/Property/postedby')
}


//get property on sell or rent

getprop_onRent() {
  return this.http.get<any>('https://localhost:7210/api/Property/getpropertyon_rnt')}

  getprop_onSell() {
    return this.http.get<any>('https://localhost:7210/api/Property/getpropertyon_sell')

  }


  //get prop by id

  getprop_byId(id:number){
    return this.http.
    get<any>("https://localhost:7210/api/Property/getpropbyid?id="+id);
  }




////
////
////
////


  //post property



  ///Ownerdetails fill

  post_ownerdetails(formdata:any){
    return this.http.post('https://localhost:7210/api/Property/post_ownerdetails',formdata)

  }


  //Addressdetails fill

  post_Addressdetails(id:number,formdata:any){
    return this.http.post('https://localhost:7210/api/Property/post_Addressdetails?uid='+id,formdata)

  }

   //Propertydetails fill

   post_Propdetails(id:number,formdata:any){
    return this.http.post('https://localhost:7210/api/Property/post_Propdetails?uid='+id,formdata)

  }



   //post_PropAmenities fill

   post_PropAmenities(id:number,prop_id:number,formdata:any){
    return this.http.post('https://localhost:7210/api/Property/post_PropAmenities?uid='+id+'&prop_id='+prop_id,formdata)


  }



  //post image


   //post_PropAmenities fill

   post_PropImages(id:number,prop_id:number,formdata:any){
    return this.http.post('https://localhost:7210/api/Property/post_PropImages?uid='+id+'&prop_id='+prop_id,formdata)


  }

  postimage(file:any){
    return this.http.post('https://localhost:7210/api/Property/ImageUrl',file)
  }

  formfill(formdata:any){
    return this.http.post('https://localhost:7210/api/Property/register',formdata)
  }




  //edit property apis

  deleteProperty(pid:number){
    return this.http.put('https://localhost:7210/api/Property/deleteProperty?pid='+pid,null);
  }

  edit_ownerdetails(uid:number,pid:number){
    return this.http.get('https://localhost:7210/api/Property/get_ownerdetails?uid='+uid+'&pid='+pid);
  }


  edit_addressdetails(pid:number){
    return this.http.get('https://localhost:7210/api/Property/get_addressdetails?pid='+pid);
  }



  edit_Propertydetails(pid:number){
    return this.http.get('https://localhost:7210/api/Property/get_Propertydetails?pid='+pid);
  }



}
