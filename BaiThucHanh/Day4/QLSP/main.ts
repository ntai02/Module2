import {ProductManager} from "./Manager";
import {Product} from "./QLSP";

let laptop = new Product("laptop",2000)
let macbook = new Product("macbook",3000)

let productManager = new ProductManager()

productManager.add = laptop
productManager.add = macbook

console.log(productManager.getAll)