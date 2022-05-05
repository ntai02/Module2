import {Circle} from "../../../../BaiThucHanh/Day2/Arc/Circle";

class Cylinder extends Circle {
    height: number = 1.0

    constructor(height: number,
                radius: number,
                color: string) {
        super(radius);
        this.height = height
    }

    getHeight(): number {
        return this.height
    }

    setHeight(height: number): void {
        this.height = height
    }

    getVolume(): number {
        return this.height * this.radius * Math.PI
    }
}

let cylinder = new Cylinder(5, 3, "blue")
console.log(cylinder.getVolume())