"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
function distance(CircleOne, CircleTwo, d) {
    var disstance = Math.pow(CircleOne.radius - CircleTwo.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(disstance);
}
var circle1 = new Circle_1.Circle(9);
var circle2 = new Circle_1.Circle(5);
console.log(distance(circle1, circle2, 24));
