import {Shape} from "./Shape";

class Circle extends Shape {
    private radius: number = 1.0

    constructor(color: string,
                filled: boolean,
                radius: number) {
        super(color, filled);
        this.radius = radius
    }

    getRadius(): number {
        return this.radius
    }

    setRadius(radius: number): void {
        this.radius = radius
    }

    getArea(): number {
        return this.radius * this.radius * Math.PI
    }

    getPerimeter(): number {
        return 2 * this.radius * Math.PI
    }

    toString(): string {
        return " A Circle with radius = "
            + this.getRadius()
            + " which is a subclass of "
            + super.toString()
    }
}

let circle: Circle = new Circle("black", true, 5)
console.log(circle.getArea())
console.log(Circle)
console.log(circle.getPerimeter())
console.log(circle.toString())

