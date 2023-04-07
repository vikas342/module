interface emp{
    id:number;
    name:string
}

function myfunc (x : emp){
    console.log(x.id);
    console.log(x.name);

}

let obj={ id:12,name:"vikas"}
myfunc(obj);

