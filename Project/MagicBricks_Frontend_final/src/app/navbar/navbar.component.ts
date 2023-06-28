import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {


  @Input() hideSomeProperties: boolean = false;



  constructor(
    private serv: AuthService,
    private route: Router,
    private api: ApiService,
    private dataserv: DataService
  ) {}

  //data of serch
  serchdata!: any[];

  cities: any[] = [];
  types: any[] = [];

  //tochecheck user status
  userlogedin: boolean = this.serv.userlogedin;

  selectedcity: any ;

  //for buy or sell
  selctedpropFor: string = '';

  logout() {
    this.serv.logout();
  }

 
  //willl used for setting city in below components
  selectcity(city: string) {
    this.selectedcity = city;
    alert(city + ' city is selcted');

    this.dataserv.setcity(city);

  }

  ngOnInit(): void {
    //get city


    this.api.getcities().subscribe((x) => {
      this.cities = x;
      console.log(this.cities);
    });

    this.api.getproptype().subscribe((x) => {
      this.types = x;
      console.log(this.types);
    });



    localStorage.setItem('selctedCity','Ahmedabad')
    this.selectedcity =localStorage.getItem('selctedCity');

  }

  //willl be call in service and service will call api in api crete dto for type and city on basis fetch data
  propserch(city: string, proptype: string) {
    alert(city + ' ' + proptype + ' ' + this.selctedpropFor);
    this.api.getprop_CTF(city, proptype, this.selctedpropFor).subscribe((x) => {
      this.serchdata = x;
      // console.log(this.serchdata);
     // this.parsingdata(this.serchdata);

      this.dataserv.putdata(this.serchdata);


      this.route.navigateByUrl('/serchresult');
    });
  }




  propbudget(min: number, max: number) {
    alert(
      this.selectedcity + ' ' + this.selctedpropFor + ' ' + min + ' ' + max
    );
    this.api
      .getpropbudget_CFMinMax(this.selectedcity, this.selctedpropFor, min, max)
      .subscribe((x) => {
        // console.warn(x);

        this.serchdata = x;
        // this.parsingdata(this.serchdata);

        this.dataserv.putdata(this.serchdata);

        this.route.navigateByUrl('/serchresult');
      });

    // this.route.navigateByUrl('/serchresult');
  }

  postproplistings() {}

  postproperty() {
    alert('ppost property button clicked');
    this.route.navigateByUrl('postproperty');
  }




  //for pasing json data
  // parsingdata(data: any) {
  //   for (let i of this.serchdata) {
  //     if (i.imageUrl) {
  //       let x = JSON.parse(i.imageUrl);

  //       i.imageUrl = x;
  //     }
  //     if (i.prop_amenities) {
  //       let x = JSON.parse(i.prop_amenities);

  //       i.prop_amenities = x;
  //     }
  //   }
  // }
}
