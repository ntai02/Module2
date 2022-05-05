import {ComparableCircle} from "./ComparableCircle";

let circle = []

circle[0] = new ComparableCircle(5)
circle[1] = new ComparableCircle(2)
circle[2] = new ComparableCircle(4)

let result = circle[1].compareTo(circle[2])

if (result == 1) {
    console.log("larger")
}else {
    console.log("smaller")
}