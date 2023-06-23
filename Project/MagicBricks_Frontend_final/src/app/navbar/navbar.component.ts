import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private serv: AuthService,
    private route: Router,
    private api: ApiService,
  ) {}

  cities: any[] = [];
  types: any[] = [];

  //tochecheck user status
  userlogedin: boolean = this.serv.userlogedin;

  selectedcity: string = 'Ahmedabad';

  //for buy or sell
  selctedpropFor: string = '';

  logout() {
    this.serv.logout();
  }

  login() {
    this.route.navigateByUrl('/login');
  }

  //willl used for setting city in below components
  selectcity(city: string) {
    this.selectedcity = city;
    alert(city + ' city is selcted');
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
  }

  //willl be call in service and service will call api in api crete dto for type and city on basis fetch data
  propserch(city: string, proptype: string) {
    alert(city + ' ' + proptype + ' ' + this.selctedpropFor);
    this.api.getprop_CTF(city,proptype,this.selctedpropFor).subscribe((x)=>{


      console.log(x);

    })



    this.route.navigateByUrl('/serchresult');
  }

  propbudget(min: number, max: number) {
    alert(
      this.selectedcity + ' ' + this.selctedpropFor + ' ' + min + ' ' + max
    );
    this.route.navigateByUrl('/serchresult');
  }

  postproplistings() {}

  postproperty() {
    alert('ppost property button clicked');
    this.route.navigateByUrl('postproperty');
  }
}
