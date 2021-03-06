export class Shape {
    private color: string = "red"
    private filled: boolean = false

    constructor(color: string,
                filled: boolean) {

        this.color = color
        this.filled = filled

    }

    public getColor(): string {
        return this.color
    }

    public getFilled(): boolean {
        return this.filled
    }

    public setColor(color: string): void {
        this.color = color
    }

    public setFilled(filled: boolean): void {
        this.filled = filled
    }

    public toString(): string {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.getFilled() ? "filled" : "not filled")
    }
}

let shape = new Shape("blue", false)
console.log(shape)
console.log(shape.toString())