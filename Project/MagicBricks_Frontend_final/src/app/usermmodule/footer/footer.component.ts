import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  cities!:any[];

  propertyof(city:string){
    alert(city);
  }

  constructor(private api: ApiService){}

  ngOnInit(): void {

    this.api.getcities().subscribe((x)=>{
      this.cities=x;
    })

  }

}
