import {Shape} from "./Shape";

export class Rectangle extends Shape {
    private width: number = 1.0
    private height: number = 1.0

    constructor(color: string,
                filled: boolean,
                width: number,
                height: number) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width
    }

    getHeight(): number {
        return this.height
    }

    setWidth(width: number): void {
        this.width = width
    }

    setHeight(height: number): void {
        this.height = height
    }

    getArea(): number {
        return this.width * this.height
    }

    getPerimeter() {
        return (this.width + this.height) * 2
    }

    toString(): string {
        return "A Rectangle with width = "
            + this.width
            + " and length = "
            + this.height
            + " which is a subclass of "
            + super.toString()
    }
}
let rectangle = new Rectangle("pink",true,5,7)
console.log(rectangle.getArea())
console.log(rectangle.getPerimeter())
console.log(rectangle.toString())