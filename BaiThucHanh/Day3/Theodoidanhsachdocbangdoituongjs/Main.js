"use strict";
exports.__esModule = true;
var Ts_1 = require("./Ts");
var book1 = new Ts_1.Book("Nhung thang ngu", "mrT", false);
var book2 = new Ts_1.Book("Hai dua tre", "kim lan", true);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + "by" + book.author;
    if (book.alreadyRead) {
        console.log("Co sach de muon");
    }
    else {
        console.log("ve dum nhe");
    }
}
