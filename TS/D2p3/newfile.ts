interface users<t1, t2> {
    id: t1;
    name: t2;
    
  }
  export class user<t1, t2> implements users<t1, t2> {
    id: t1;
    name: t2;
    constructor(id: t1, name: t2) {
      this.id = id;
      this.name = name;
     
    }
  }
  