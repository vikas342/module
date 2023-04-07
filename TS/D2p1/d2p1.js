function myfunc(x, y) {
    return x + y;
}
var x = myfunc("vikas ", "sonwane");
var y = myfunc(25, 10);
console.log(x);
console.log(y);
var myclass = /** @class */ (function () {
    function myclass(id, name) {
        this.id = id;
        this.name = name;
    }
    myclass.prototype.myfunc2 = function () {
        console.log("id: ".concat(this.id, " and name: ").concat(this.name));
    };
    return myclass;
}());
var obj = new myclass(1, "vikas");
obj.myfunc2();
function myfunc3(id, name) {
    console.log("id: ".concat(id, " and name: ").concat(name));
}
var obj2 = myfunc3;
obj2(7, "sunny");
