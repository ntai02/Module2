import {Book} from "./Book";

export class BookManager {

    books : Book[] = []

    constructor() {
    }

    addBook(book : Book) : void{
        this.books.push(book)
    }
    getList() {
        return this.books
    }
    update(ID : string, name : string) : number {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == name &&
                this.books[i].ID == ID ) {
                return i
            }
        }
    }
    detele (ID : string) : void {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].ID == ID &&
                this.books.splice(i,1)) {

            }
        }
    }



}