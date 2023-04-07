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
    Address: "ahmedabad",
    Salary: 1000000,
  },
  {
    ID: 2,
    FirstName: "vinit",
    LastName: "shah",
    Address: "mumbai",
    Salary: 250000,
  },
];

for (let i in arr) {
  document.getElementById(
    "tbl"
  )!.innerHTML += `<tr><td>${arr[i].ID}</td><td>${arr[i].FirstName}</td><td>${arr[i].LastName}</td><td>${arr[i].Address}</td><td>${arr[i].Salary}</td></tr>`;
}

arr.push({
  ID: 3,
  FirstName: "preet",
  LastName: "vora",
  Address: "dubai",
  Salary: 500000,
});

for (let i in arr) {
  document.getElementById(
    "tbl2"
  )!.innerHTML += `<tr><td>${arr[i].ID}</td><td>${arr[i].FirstName}</td><td>${arr[i].LastName}</td><td>${arr[i].Address}</td><td>${arr[i].Salary}</td></tr>`;
}



function remove(){

    let n:any = parseInt(prompt("enter id:"));

    for (let i in arr) {
      if (arr[i].ID == n) {
       
        delete arr[i]
        
      }
    }

    for (let i in arr) {
        document.getElementById(
          "tbl3"
        )!.innerHTML += `<tr><td>${arr[i].ID}</td><td>${arr[i].FirstName}</td><td>${arr[i].LastName}</td><td>${arr[i].Address}</td><td>${arr[i].Salary}</td></tr>`;
      }

}
