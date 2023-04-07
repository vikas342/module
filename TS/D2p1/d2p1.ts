function myfunc<T>(x:T,y:T):T{
    return x+y;
}


let x=myfunc<string>("vikas ","sonwane");
let y=myfunc<number>(25,10);

console.log(x);
console.log(y);



class myclass<T,U>{
    id:T;
    name:U;
    

    constructor (id:T,name:U) {
        this.id=id;
        this.name=name;

        
    }

    myfunc2 ():void {

        console.log(`id: ${this.id} and name: ${this.name}`);


    }
}
const obj = new myclass<number,string>(1,"vikas");
obj.myfunc2();



interface myinterface <T,U>{
   
    (id:T,name:U):void;
}

function myfunc3(id:number,name:string){
    console.log(`id: ${id} and name: ${name}`);
}

let obj2:myinterface<number,string>=myfunc3;
obj2(7,"sunny")