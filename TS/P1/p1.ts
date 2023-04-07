class vehical {
    type: string;
   
    constructor(type: string) {
      this.type = type;
    }
   
    disp() {
      return `this is ${this.type}`;
    }
  }

  class lmv extends vehical{

  }
  class tw extends vehical{

  }
   
  const obj =new lmv("car");
  const obj2 =new tw("bike");

 var x:string= obj.disp();
 var y:string= obj2.disp();


 console.log(x);
 console.log(y);


