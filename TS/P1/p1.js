var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehical = /** @class */ (function () {
    function vehical(type) {
        this.type = type;
    }
    vehical.prototype.disp = function () {
        return "this is ".concat(this.type);
    };
    return vehical;
}());
var lmv = /** @class */ (function (_super) {
    __extends(lmv, _super);
    function lmv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return lmv;
}(vehical));
var tw = /** @class */ (function (_super) {
    __extends(tw, _super);
    function tw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return tw;
}(vehical));
var obj = new lmv("car");
var obj2 = new tw("bike");
var x = obj.disp();
var y = obj2.disp();
console.log(x);
console.log(y);
