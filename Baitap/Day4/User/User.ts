import {Role} from "./role";

class User {
    protected name : string
    protected email : string

            constructor(name : string,
                        email : string ) {

                this.name = name
                this.email = email

            }
        getInfo ()  {
               return {
                   name: this.name,
                   mail: this.email
               }

        }
        isAdmin () {
                if (Role.Admin) {
                    return console.log("la admin")
                }
                if (Role.User) {
                    return console.log("la nguoi dung binh thuong")
                }
        }
        set setName (name : string) {
            this.name = name
        }
        set setEmail (email : string) {
            this.email = email
        }
}

let user = new User("tai",'alo')
console.log(user.getInfo())
console.log(user.isAdmin())