import {Gender} from "./Gender";
import {Position} from "./Position";

class Member {

    Name : string
    Gender : Gender
    Birthday : Date
    Email : string
    PhoneNumber? : number
    Position? : Position

    constructor(Name : string,
                Gender : Gender,
                Birthday: Date,
                Email : string,
                PhoneNumber? : number,
                Position? : Position) {


        this.Name = Name
        this.Gender = Gender
        this.Birthday = Birthday
        this.Email = Email
        this.PhoneNumber = PhoneNumber
        this.Position = Position

    }

}
let member: Member[] = []
member.push(new Member("Nguyen Van A", Gender.Male,new Date(20/11/1999),"khongcoemail@gmail.com",19001001))
member.push(new Member("Nguyen Chi Dung",Gender.Female,new Date(1995),"ChiDung@gmail.com",1009,Position.garbageCollector))

function showMember(member : Member) {
    console.log(member)
}
member.forEach(showMember)