let arr: {
    ID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Salary: number;
  }[] = [
    {
      ID: 1,
      FirstName: "vikas",
      LastName: "sonwane",
      Address: "A201,nilkhant elegance,ahmedabd,gujrat",
      Salary: 1000000,
    },
    {
      ID: 2,
      FirstName: "vinit",
      LastName: "shah",
      Address: "A701,kanak kala,thane,mahrastra",
      Salary: 250000,
    },
  ];

  for( let i in arr){
    
  document.getElementById(
    "tbl"
  )!.innerHTML += `<tr><td>${arr[i].ID}</td><td>${arr[i].FirstName}</td><td>${arr[i].LastName}</td><td>${arr[i].Address}</td><td>${arr[i].Salary}</td></tr>`;
  }




  let arr2: {
    ID: number;
    FirstName: string;
    LastName: string;
    Address: string;
    Salary: number;
  }[] = [
    {
      ID: 3,
      FirstName: "preet",
      LastName: "vora",
      Address: "B502,venus atlantis,pune,maharstra",
      Salary: 650052,
    }
  ];

  for( let i in arr2){
    
    document.getElementById(
      "tbl2"
    )!.innerHTML += `<tr><td>${arr2[i].ID}</td><td>${arr2[i].FirstName}</td><td>${arr2[i].LastName}</td><td>${arr2[i].Address}</td><td>${arr2[i].Salary}</td></tr>`;
    }



    let arr3:any[]=arr.concat(arr2);

    for(let i in arr3){

        var fnm:string=arr3[i].FirstName +" "+arr3[i].LastName;
    

        var add=(arr3[i].Address).split(",");
        console.log(add)
        var flat=add[0];
        var soc=add[1];
        var city=add[2];
        var state=add[3];

        console.log(add[0])

       
   document.getElementById("tbl3")!.innerHTML +=`<tr><td>${arr3[i].ID}</td><td>${fnm}</td><td>${flat}</td><td>${soc}</td><td>${city}</td><td>${state}</td><td>${arr3[i].Salary}</td></tr>`
    }


    


