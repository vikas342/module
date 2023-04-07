let emp: {
    ID:number, Name:string, City:string, DOJ:Date
   
}[]=[
    {
        ID: 1,
    Name: "vikas",
    
    City: "ahmedabad",
    DOJ: new Date(2022,5,3)
    },
    {
        ID: 2,
    Name: "vinit",
    
    City: "mumbai",
    DOJ: new Date(2024,5,3)
    },
    {
        ID: 3,
    Name: "preet",
    
    City: "mumbai",
    DOJ: new Date(2023,5,3)
    },
    {
        ID: 4,
    Name: "parv",
    
    City: "ahmedabad",
    DOJ: new Date(2021,5,3)
    }
]

var x:number=2;
var find_emp=emp.find((value)=>{


    for(let i in emp){
      if(value.ID==x){
        return value;
      }
    
      
    }
   
   


});
console.log(find_emp)

// who join after 2020 and from mumbai
console.log("who join after 2020 and from mumbai")

emp.map(function(val){
    var d= 2020;

    

    if( val.DOJ.getFullYear()> d && val.City=="mumbai" ){

        console.log(val);
    }
});


// who join after 2020
console.log("who join after 2020")

emp.map(function(val){
    var d=2020;

    if(val.DOJ.getFullYear()>d
    ){
        console.log(val);
    }
});