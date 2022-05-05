import {Status} from "./Status";

class Fan {

    private Speed : Status
    private  On : boolean
    private Radius : number
    private Color : string

            constructor( Speed : Status,
                            On : boolean,
                         Radius: number,
                         Color : string ) {

                    this.Speed = Speed ;
                    this.On = On ;
                    this.Radius = Radius ;
                    this.Color = Color ;
            }
            getSpeed () {
                return this.Speed
            }
            setSpeed (Speed : Status) {
                this.Speed = Status.SLOW
            }
            getOn () {
                return this.On
            }
            setOn (On : boolean) {
                this.On = false
            }
            getRadius () {
                return this.Radius
            }
            setRadius (Radius : number) {
                this.Radius = 5
            }
            getColor () {
                return this.Color
            }
            setColor (Color : string) {
                this.Color = "blue"
            }





}