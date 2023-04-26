import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  constructor( private route:ActivatedRoute){ }

  id!:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>{

     this.id= value.get('id');
     console.log(this.id)
    })
  }

}
