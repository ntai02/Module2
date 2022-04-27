import {Circle} from "./Circle";

function distance(CircleOne : Circle,CircleTwo : Circle, d : number): number {
    let disstance = Math.pow(CircleOne.radius - CircleTwo.radius, 2) + Math.pow(d,2)
    return Math.sqrt(disstance)
}
let circle1 = new Circle(9)
let circle2 = new Circle(5)

console.log(distance(circle1,circle2,24))