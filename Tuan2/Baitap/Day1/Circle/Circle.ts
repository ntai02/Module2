class Circle {
    private radius: number = 1.0
    private color: string

    constructor(radius: number,
                color: string) {

        this.radius = radius;
        this.color = color
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
}

let circle = new Circle(2, "brown")
console.log(circle.getArea())