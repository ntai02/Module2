class Staff {

    name : string
    email : string
    age : number

    constructor(name : string,
                email: string,
                age : number ) {
        this.name = name
        this.email = email
        this.age = age
    }
    getName(): string {
        return this.name
    }
    setName(name : string): void {
        this.name = name
    }
    getEmail(): string {
        return this.email
    }
    setEmail(email : string){
        this.email = email
    }
    getAge(){
        return this.age
    }
    setAge(age : number){
        this.age = age
    }


}
let staff = new Staff("Tai","123@gmail.com",20)

let nameStaff = staff.getName()

console.log(nameStaff)

staff.setName("Tai 2")

let currentNameStaff = staff.getName()

console.log(staff)

console.log(currentNameStaff)