import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageurlService {

  constructor(private hc:HttpClient) { }
  
  
  postimage(file:any){
    return this.hc.post('https://localhost:7146/api/Values/ImageUrl',file)
  }

  formfill(formdata:any){
    return this.hc.post('https://localhost:7146/api/Values/register',formdata)
  }
}
