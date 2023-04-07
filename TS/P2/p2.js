function printing(x, y) {
    if (typeof x === "string" && typeof y === "string") {
        alert("".concat(x, " and  ").concat(y));
    }
    if (typeof x === "number" && typeof y === "number") {
        alert(x + y);
    }
}
printing(10, 25);
