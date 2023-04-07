function myfunc(x:number | string,y:number | string): string | number
{
    if(typeof x==="number" && typeof y==="number"){

        return x+y;
    }
    else if(typeof x==="string" && typeof y==="string"){

        return x+y;
    }



}
var result= (z :number,w:number):number=>{
    return z+w;

}


var x=myfunc(12,44);
console.log(x);

var y=myfunc("vikas ","sonwane");
console.log(y);


var x1=result(11,21);
console.log(x1);

