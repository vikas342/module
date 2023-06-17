import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';



@Component({
  selector: 'app-lising',
  templateUrl: './lising.component.html',
  styleUrls: ['./lising.component.css']
})
export class LisingComponent implements OnInit {
  data!:any;

  constructor(private api:ApiService,private transferState: TransferState){




  }


  ngOnInit(): void {

    this.api.getlisting().subscribe((data)=>{
      console.log(data)
      this.data=data;
    })


    const stateKey = makeStateKey('datas'); // Define a unique key for your data
    this.transferState.set(stateKey, this.data);

  }



  getDataFromTransferState() {
    const stateKey = makeStateKey('data'); // Use the same unique key used to store the data
    const data = this.transferState.get(stateKey, null);
    return data;
  }







}
