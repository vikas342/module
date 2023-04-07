interface emp{
    ID: number,
    FirstName: string,
    LastName: string,
    Address: string,
    Salary: number,
}

class details implements emp{
   
    ID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Salary: number;


    constructor(id,fn,ln,add,sal){
        this.ID=id;
        this.Address=add;
        this.FirstName=fn;
        this.LastName=ln;
        this.Salary=sal;
    }

    print(){
        return console.log(`employee id is ${this.ID} ,employee FName is ${this.FirstName},employee LName is ${this.LastName},Salary is${this.Salary},Address is${this.Address}`)
    }

}

const obj = new details(1,"vikas","Sonwane",150000,"Ahmedabad");
obj.print();
