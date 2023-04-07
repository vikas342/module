var details = /** @class */ (function () {
    function details(id, fn, ln, add, sal) {
        this.ID = id;
        this.Address = add;
        this.FirstName = fn;
        this.LastName = ln;
        this.Salary = sal;
    }
    details.prototype.print = function () {
        return console.log("employee id is ".concat(this.ID, " ,employee FName is ").concat(this.FirstName, ",employee LName is ").concat(this.LastName, ",Salary is").concat(this.Salary, ",Address is").concat(this.Address));
    };
    return details;
}());
var obj = new details(1, "vikas", "Sonwane", 150000, "Ahmedabad");
obj.print();
