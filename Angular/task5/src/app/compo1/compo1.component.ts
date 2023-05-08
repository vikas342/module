import { Component } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {


  undoData:Array<any>=[];


  data:Array<any>=[{

    name:"vikas"

  },{

    name:"vinit"
  },
  {

    name:"preet"
  },
  {
   
    name:"ronny"
  }
]



myfunc(a:number){
  console.log(a)

  this.undoData.push(
   this.data.splice(a,1)[0]
  )
console.log(this.undoData)

}


undo(){

  let x:any= this.undoData.pop()

  this.data.push(x);
  console.log(this.undoData)
}
}
