import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";

class Square extends Rectangle {

    constructor(color: string,
                filled: boolean,
                side: number) {
        super(color, filled, side, side);
    }

    getSide(): number {
        return this.getWidth()
    }
    setSide(side : number) {
        this.setWidth(side)
        this.setHeight(side)
    }
    setWidth(width: number): void {
        this.setSide(width)
    }
    setHeight(height: number): void {
        this.setSide(height)
    }
    toString() : string {
        return "A Square with side = "
                + this.getSide()
                +" which is a subclass of "
                +super.toString()
    }
}
let square = new Square("green",true,3)
console.log(square.toString())
