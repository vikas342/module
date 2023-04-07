var x = 454;
console.log(x);
var y = "hello";
console.log(y);
var z = true;
console.log(z);
var A = [1, 2, 3];
console.log(A);
function add(n1, n2) {
    return n1 + n2;
}
document.getElementById("txt1").innerHTML = "".concat(add(10, 20));
console.log(add(12, 400));
//tuple lets you to initiallize fixed length of array
var B;
B = [10, "fgh"];
console.log(B);
//enum it provides constantwith fixed value ,by default starts with 0,but you can change it as below
var clrs;
(function (clrs) {
    clrs[clrs["Red"] = 1] = "Red";
    clrs[clrs["Green"] = 22] = "Green";
    clrs[clrs["Blue"] = 121] = "Blue";
})(clrs || (clrs = {}));
var c = clrs.Green;
console.log(c);
//unkown 
var notSure = 4;
console.log(notSure);
notSure = "maybe a string instead";
console.log(notSure);
// OK, definitely a boolean
notSure = false;
console.log(notSure);
//void
function func() {
    console.log("This is void function");
}
func();
//any
function func2() {
    console.log("This function returns anything type of data");
}
func2();
//undfinedtype,null type
var u = undefined;
var n = null;
