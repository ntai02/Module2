"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.update = function (ID, name) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].name == name &&
                this.books[i].ID == ID) {
                return i;
            }
        }
    };
    BookManager.prototype.detele = function (ID) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].ID == ID &&
                this.books.splice(i, 1)) {
            }
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
