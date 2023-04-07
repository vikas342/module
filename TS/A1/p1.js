var arr = [
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
for (var i in arr) {
    document.getElementById("tbl").innerHTML += "<tr><td>".concat(arr[i].ID, "</td><td>").concat(arr[i].FirstName, "</td><td>").concat(arr[i].LastName, "</td><td>").concat(arr[i].Address, "</td><td>").concat(arr[i].Salary, "</td></tr>");
}
arr.push({
    ID: 3,
    FirstName: "preet",
    LastName: "vora",
    Address: "dubai",
    Salary: 500000,
});
for (var i in arr) {
    document.getElementById("tbl2").innerHTML += "<tr><td>".concat(arr[i].ID, "</td><td>").concat(arr[i].FirstName, "</td><td>").concat(arr[i].LastName, "</td><td>").concat(arr[i].Address, "</td><td>").concat(arr[i].Salary, "</td></tr>");
}
function remove() {
    var n = parseInt(prompt("enter id:"));
    for (var i in arr) {
        if (arr[i].ID == n) {
            delete arr[i];
        }
    }
    for (var i in arr) {
        document.getElementById("tbl3").innerHTML += "<tr><td>".concat(arr[i].ID, "</td><td>").concat(arr[i].FirstName, "</td><td>").concat(arr[i].LastName, "</td><td>").concat(arr[i].Address, "</td><td>").concat(arr[i].Salary, "</td></tr>");
    }
}
