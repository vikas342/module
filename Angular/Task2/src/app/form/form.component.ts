import { Component } from '@angular/core';
import { details } from '../details';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements details {

  
  title = 'Task2';

  Brand!:string;
  Model!:string;
  Image!:string;
  Price!:number;

  // Pdetails:Array<details>=[];

  Product:Array<details>=[{
    Brand: "Apple",
    Model: "Iphone 13",
    Image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    Price: 48999
    
  },{
  Brand: "Apple",
  Model: "Iphone 12",
  Image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  Price: 36999
  
},
{
  Brand: "Samsung",
  Model: "S21",
  Image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  Price: 41999
  
},
{
  Brand: "Samsung",
  Model: "S22",
  Image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  Price: 51999
  
}
];




// myfunc2(data:details){
//   this.Pdetails.shift();
//   console.log(`${data.Brand} ,${data.Model} ,${data.Price},${data.Image}`);
//   this.Pdetails.push({
//     Brand: data.Brand,
//     Model: data.Model,
//     Image: data.Image,
//     Price: data.Price
//   })

// }

myfunc(){
  this.Product.push({
    Brand: this.Brand,
    Model: this.Model,
    Image: this.Image,
    Price: this.Price
  })


  


  console.log(this.Product)
}




}
