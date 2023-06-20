import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  otheruserlistings!: any[];
  data: any = [];

  constructor(private apiserv: ApiService) {}
  ngOnInit(): void {
    this.apiserv.getotheruserlisting().subscribe((res) => {
      this.otheruserlistings = res;
      for (let i of this.otheruserlistings) {
        if (i.imageUrl) {
          let x = JSON.parse(i.imageUrl);

          i.imageUrl = x;
        }
        if (i.prop_amenities) {
          let x = JSON.parse(i.prop_amenities);

          i.prop_amenities = x;
        }
      }
    });



  }

}
