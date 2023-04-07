
let x:number=454;
console.log(x);

let y:string="hello";
console.log(y);

let z:boolean=true;
console.log(z);


let A: number[] = [1, 2, 3];
console.log(A);

function add(n1:number,n2:number):number{
    return n1+n2;
}

 document.getElementById("txt1")!.innerHTML=`${add(10,20)}`;
console.log(add(12,400));


//tuple lets you to initiallize fixed length of array
let B:[number,string]

B=[10,"fgh"]
console.log(B);


//enum it provides constantwith fixed value ,by default starts with 0,but you can change it as below

enum clrs {
    Red = 1,
    Green=22,
    Blue=121,
  }
  let c: clrs = clrs.Green;

  console.log(c);



  //unkown 
  let notSure: unknown = 4;
  console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
 
// OK, definitely a boolean
notSure = false;
console.log(notSure);



//void
function func(): void {
    console.log("This is void function");
  }
  func();

//any
  function func2(): any {
    console.log("This function returns anything type of data");
  }
  func2();


//undfinedtype,null type
  let u: undefined = undefined;
let n: null = null;