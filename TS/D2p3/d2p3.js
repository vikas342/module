"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newfile_1 = require("./newfile");
console.log('-----------export demo----------');
var obj1 = new newfile_1.user(1, 'vikas sonwane');
var obj2 = new newfile_1.user(2, 'vinit shah');
var userdata = [obj1, obj2];
console.log(userdata);
for (var _i = 0, userdata_1 = userdata; _i < userdata_1.length; _i++) {
    var i = userdata_1[_i];
    console.log("name is:".concat(i.name, " and id is:").concat(i.id));
}
