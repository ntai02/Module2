import {Tiger} from "./Tiger";
import {Chicken} from "./Chicken";
import {Animal} from "./Animal";
import {Apple} from "./Apple";
import {Orange} from "./Orange";

let animal = []

animal[0] = new Tiger()
animal[1] = new Chicken()

animal.forEach ((item, index) => {
    console.log(item.makeSound())
    if (item instanceof Chicken) {
        console.log(item.howtoEat())
    }
})

let fruit = []

fruit[0] = new Apple()
fruit[1] = new Orange()

fruit.forEach((item, index) => {
    console.log(item.howtoEat())
})