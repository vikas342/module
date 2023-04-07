//creating applicant 

interface applicants{
    name:string;
    email:string;
    position:string;

}

// adding candidate

class applicant implements applicants{
    id:number;
    age:number;
    name:string;
    email:string;
    gender:string;
    position:string;

    constructor(id,name,email,age,gender,position){
        this.id=id;
        this.name=name;
        this.email=email;
        this.age=age;
        this.gender=gender;
        this.position=position;

    }
    send(){
        alert("data sent"); 
    }
}


let applicant_data:applicant[]=[
    new applicant(1,"vikas","vsonwane@",21,"male",".net dveloper"),
    new applicant(2,"vinit","vinit@",22,"male","php dveloper"),
    new applicant(3,"preet","preet@",23,"male","java dveloper")
]
function send(){
    alert("applied succesfully"); 
}



class vacancy{
    id:number;
    position:string;
    no_vac:number

    constructor(id,position,no_vac){
        this.id=id;
        this.position=position;
        this.no_vac=no_vac;
    }

}

let arr_vacancy:vacancy[]=[];
arr_vacancy.push(new vacancy(1,"data scientist",5),new vacancy(2,".net dveloper",5),new vacancy(3,"php dveloper",5),new vacancy(4,"java dveloper",5));

console.log(arr_vacancy);
display(vacarr);





    function display(vacs: Vacancy[]): void {
        let vac: string = '';
        for (const item of vacs) {
          vac += `<div class="card mx-1 my-2 ">
              <div class="card-body">
                <h4 class="card-title">Department:${item.position}</h4>
             
                <p class="cadr-text">no of vacabcies :${item.no_vac}</p>
                <div class="container d-flex justify-content-center"><button id="btn${item.id}">Apply</button></div>
              </div>
            </div>`;
       
        }
        document.getElementById('app')!.innerHTML = vac;
      }

    





