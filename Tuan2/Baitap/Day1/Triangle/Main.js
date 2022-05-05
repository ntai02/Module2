"use strict";
exports.__esModule = true;
var Triangle_1 = require("./Triangle");
var main = new Triangle_1.Triangle(1, 2, 1, "tam giac", "yellow");
if (main.getCheck() == true) {
    console.log("dien tich la: ".concat(main.getArea(), ", chu vi la:").concat(main.getPerimeter()));
}
else {
    console.log("day ko phai hinh tam giac");
}
