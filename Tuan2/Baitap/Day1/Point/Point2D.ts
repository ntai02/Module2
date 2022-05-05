export class Point2D {
    x: number
    y: number

    constructor(x: number,
                y: number) {

        this.x = x
        this.y = y

    }
    getX () : number {
        return this.x
    }
    getY () : number {
        return  this.y
    }
    setX (x : number) : void {
        this.x = x
    }
    setY (y : number) : void {
        this.y = y
    }
    getXY () : object {
        return {

            x : this.x,
            y : this.y

        }
    }
    setXY (x : number , y : number ) : void {
        this.x = x
        this.y = y
    }

}
let point2d = new Point2D(3,5)
console.log(point2d.getXY())
console.log(point2d.getX())
console.log(point2d.getY())