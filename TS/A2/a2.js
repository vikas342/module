var arr = [
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
for (var i in arr) {
    document.getElementById("tbl").innerHTML += "<tr><td>".concat(arr[i].ID, "</td><td>").concat(arr[i].FirstName, "</td><td>").concat(arr[i].LastName, "</td><td>").concat(arr[i].Address, "</td><td>").concat(arr[i].Salary, "</td></tr>");
}
var arr2 = [
    {
        ID: 3,
        FirstName: "preet",
        LastName: "vora",
        Address: "B502,venus atlantis,pune,maharstra",
        Salary: 650052,
    }
];
for (var i in arr2) {
    document.getElementById("tbl2").innerHTML += "<tr><td>".concat(arr2[i].ID, "</td><td>").concat(arr2[i].FirstName, "</td><td>").concat(arr2[i].LastName, "</td><td>").concat(arr2[i].Address, "</td><td>").concat(arr2[i].Salary, "</td></tr>");
}
var arr3 = arr.concat(arr2);
for (var i in arr3) {
    var fnm = arr3[i].FirstName + " " + arr3[i].LastName;
    var add = (arr3[i].Address).split(",");
    console.log(add);
    var flat = add[0];
    var soc = add[1];
    var city = add[2];
    var state = add[3];
    console.log(add[0]);
    document.getElementById("tbl3").innerHTML += "<tr><td>".concat(arr3[i].ID, "</td><td>").concat(fnm, "</td><td>").concat(flat, "</td><td>").concat(soc, "</td><td>").concat(city, "</td><td>").concat(state, "</td><td>").concat(arr3[i].Salary, "</td></tr>");
}
