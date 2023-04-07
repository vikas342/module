var x = new Map();
x.set(1, "vikas");
x.set("one", "vinit");
x.set("2", "virat");
x.set(2, "goku");
console.log(x.get(1));
console.log(x.get("one"));
console.log(x.has(1));
console.log(x.has(2));
console.log(x.delete(1));
console.log(x.size);
var y = new Set();
y.add("vikas");
y.add("asds");
y.add(1);
y.add(3);
console.log(y);
//Check value is present or not  
console.log(y.has("vikas"));
console.log(y.has(10));
//It returns size of Set  
console.log(y.size);
//Delete a value from set  
console.log(y.delete(3));
//Returns Set data after clear method.  
console.log(y);
//Clear whole Set  
y.clear();
console.log(y);
var date = new Date();
console.log("Date = " + date);
var d = new Date("2022-03-21");
console.log("Date = " + d);
console.log("Date = " + d.getDate());
console.log("day = " + d.getDay());
console.log("year = " + d.getFullYear());
console.log("month = " + d.getMonth());
console.log("time in ms = " + d.getTime());
