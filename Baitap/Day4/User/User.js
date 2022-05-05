"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var role_1 = require("./role");
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.getInfo = function () {
        return {
            name: this.name,
            mail: this.email
        };
    };
    User.prototype.isAdmin = function () {
        if (role_1.Role.Admin) {
            return console.log("la admin");
        }
        if (role_1.Role.User) {
            return console.log("la nguoi dung binh thuong");
        }
    };
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("tai", 'alo');
console.log(user.getInfo());
console.log(user.isAdmin());
