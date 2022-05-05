import {Book} from "./Book";
import {BookManager} from "./BookManager";

let book = new Book("01","Nhung dua tre")
let book1 = new Book("02","Ong giao")
let book2 = new Book("03","Alo")

let bookManager = new BookManager()

bookManager.addBook(book1)
bookManager.addBook(book2)
bookManager.addBook(book)

bookManager.update("03","Ong giao di tu")

console.log(bookManager.getList())
