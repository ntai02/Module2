import {Shape} from "./Shape";

export class Triangle extends Shape {
    side1: number
    side2: number
    side3: number

    constructor(side1: number,
                side2: number,
                side3: number,
                name : string,
                color : string) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3
    }


    getSide1(): number {
        return this.side1
    }

    getSide2(): number {
        return this.side2
    }

    getSide3(): number {
        return this.side3
    }

    setSide1(side1: number): void {
        this.side1 = side1
    }

    setSide2(side2: number): void {
        this.side2 = side2
    }

    setSide3(side3: number): void {
        this.side3 = side3
    }

    getCheck(): boolean {
        if (this.side1 + this.side2 > this.side3 &&
            this.side2 + this.side3 > this.side1 &&
            this.side1 + this.side3 > this.side2) {
            return true
        } else {
            return false
        }
    }

    getPerimeter(): number {
        return this.side1 + this.side2 + this.side3
    }
    getArea () : number {
        return Math.sqrt(this.getPerimeter()*(this.getPerimeter()-this.side1)*(this.getPerimeter()-this.side2)*(this.getPerimeter()*this.side3))
    }
}