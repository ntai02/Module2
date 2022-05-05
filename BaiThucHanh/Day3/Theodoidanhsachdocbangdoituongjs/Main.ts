import {Book} from "./Ts";
let book1 = new Book("Nhung thang ngu","mrT", false)
let book2 = new Book("Hai dua tre","kim lan",true)

let books : Book[] = []
books.push(book1,book2)

for (let i = 0; i < books.length; i++) {
    let book = books[i]
    let bookInfo = book.title + "by" + book.author
    if (book.alreadyRead) {
        console.log("Co sach de muon")
    }else {
        console.log("ve dum nhe")
    }
}