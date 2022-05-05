import {Triangle} from "./Triangle";

let main = new Triangle(1,2,1,"tam giac","yellow")


    if (main.getCheck() == true) {
        console.log(`dien tich la: ${main.getArea()}, chu vi la:${main.getPerimeter()}`)

    } else {
        console.log("day ko phai hinh tam giac")
    }


