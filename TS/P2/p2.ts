function printing(x: string | number ,y: string |number){


    if(typeof x==="string" && typeof y==="string"){
        alert(`${x} and  ${y}`);
    }
    if(typeof x==="number" && typeof y==="number"){
       alert(x+y);
    }

}

printing(10,25);


