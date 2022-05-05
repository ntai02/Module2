class QuadraticEquation  {
    A : number
    B : number
    C : number

    constructor(A : number,
                B : number,
                C : number ) {

        this.A = A
        this.B = B
        this.C = C

    }
    getA(){
        return this.A
    }
    getB(){
        return this.B
    }
    getC(){
        return this.C
    }

    dental()  {
        return  this.B * this.B - 4 * this.A * this.C

    }
    getRoot1() {
        return (- this.B + Math.sqrt(this.dental()))/ 2 * this.A
    }
    getRoot2() {
        return (- this.B - Math.sqrt(this.dental()))/ 2 * this.A
    }
    getDiscriminant()  {
        if ( this.A == 0) {
            let x = -this.C/this.B
            return console.log("day ko phai pt bac 1" + x)
        }else if (this.dental() < 0) {
            return console.log("pt vo nghiem")
        }else if (this.dental() == 0) {
            let x = -this.B / 2 * this.A
            return console.log("pt co 1 nghiem" + x)
        }else if (this.dental()>0) {
            return console.log("pt co 2 nghiem" + this.getRoot1() +"va" + this.getRoot2())
        }
    }


}

let bac2 = new QuadraticEquation(5 ,10,4)
bac2.getDiscriminant()