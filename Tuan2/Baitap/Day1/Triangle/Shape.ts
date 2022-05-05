export class Shape {
    name : string
    color : string

        constructor(name : string,
                    color : string) {

                this.name = name
                this.color = color
        }
        getName () : string{
            return this.name
        }
        setName (name : string) : void {
            this.name = name
        }

}