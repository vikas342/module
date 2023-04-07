var users;
(function (users) {
    var user_data = /** @class */ (function () {
        function user_data(num, name) {
            this.name = name;
            this.id = num;
        }
        return user_data;
    }());
    users.user_data = user_data;
})(users || (users = {}));
var arr = [];
var u1 = new users.user_data(1, "vikas");
var u2 = new users.user_data(2, "vinit");
var u3 = new users.user_data(3, "preet");
arr.push(u1, u2, u3);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log("name : ".concat(val['name'], " id:").concat(val['id']));
}
