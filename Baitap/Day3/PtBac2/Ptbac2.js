var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
    QuadraticEquation.prototype.getA = function () {
        return this.A;
    };
    QuadraticEquation.prototype.getB = function () {
        return this.B;
    };
    QuadraticEquation.prototype.getC = function () {
        return this.C;
    };
    QuadraticEquation.prototype.dental = function () {
        return this.B * this.B - 4 * this.A * this.C;
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        return (-this.B + Math.sqrt(this.dental())) / 2 * this.A;
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        return (-this.B - Math.sqrt(this.dental())) / 2 * this.A;
    };
    QuadraticEquation.prototype.getDiscriminant = function () {
        if (this.A == 0) {
            var x = -this.C / this.B;
            return console.log("day ko phai pt bac 1" + x);
        }
        else if (this.dental() < 0) {
            return console.log("pt vo nghiem");
        }
        else if (this.dental() == 0) {
            var x = -this.B / 2 * this.A;
            return console.log("pt co 1 nghiem" + x);
        }
        else if (this.dental() > 0) {
            return console.log("pt co 2 nghiem" + this.getRoot1() + "va" + this.getRoot2());
        }
    };
    return QuadraticEquation;
}());
var bac2 = new QuadraticEquation(5, 10, 4);
bac2.getDiscriminant();
