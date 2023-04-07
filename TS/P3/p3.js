var direction;
(function (direction) {
    direction[direction["top"] = 1] = "top";
    direction[direction["right"] = 25] = "right";
    direction[direction["bottom"] = 30] = "bottom";
    direction[direction["left"] = 555] = "left";
})(direction || (direction = {}));
var mydirection = direction.bottom;
var mydirection2 = direction.top;
var mydirection3 = direction.right;
var mydirection4 = direction.left;
console.log(mydirection);
console.log(mydirection2);
console.log(mydirection3);
console.log(mydirection4);
