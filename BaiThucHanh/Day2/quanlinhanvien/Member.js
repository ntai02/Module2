"use strict";
exports.__esModule = true;
var Gender_1 = require("./Gender");
var Position_1 = require("./Position");
var Member = /** @class */ (function () {
    function Member(Name, Gender, Birthday, Email, PhoneNumber, Position) {
        this.Name = Name;
        this.Gender = Gender;
        this.Birthday = Birthday;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Position = Position;
    }
    return Member;
}());
var member = [];
member.push(new Member("Nguyen Van A", Gender_1.Gender.Male, new Date(20 / 11 / 1999), "khongcoemail@gmail.com", +8419001001));
member.push(new Member("Nguyen Chi Dung", Gender_1.Gender.Female, new Date(1995), "ChiDung@gmail.com", +84009, Position_1.Position.garbageCollector));
function showMember(member) {
    console.log(member);
}
member.forEach(showMember);
