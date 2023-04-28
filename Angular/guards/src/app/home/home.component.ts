import { Component } from '@angular/core';
import { Profile } from '../model';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private serv:CheckService){

  }

  user_profile_data:Profile[]=this.serv.userdata;
  
}
