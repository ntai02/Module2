// let names = ['alpha','beta','gamma','delta']
// let [firstname, secondname] = names
//
// console.log(firstname)
// console.log(secondname)
//
// let [firstname, secondname] = ['alpha','beta','gamma','delta']
//
// console.log(firstname)
// console.log(secondname)
//
// let [firstname,,...lastname] = ['alpha','beta','gamma','delta']
//
// console.log(firstname)
// console.log(lastname)
let [firstName, secondName] = ['alpha','beta','gamma','delta']

console.log(firstName)
console.log(secondName)

[firstName, secondName] = [secondName, firstName]

console.log(firstName)
console.log(secondName)

// function nameList() {
//     return ['alpha','beta','gamma','delta']
//
// }
// let [firstName, secondName] = nameList()
//
// console.log(firstName)
// console.log(secondName)
//
// let marks = {x : 21, y: -34, z: 47 };
// //
// // let x = mark.x
// // let y = mark.y
// // let z = mark.z
//
// const {x, y, z} = marks
//
// console.log(x);
// console.log(y);
// console.log(z);

const marks = {
    section1: {alpha: 15, beta: 16},
    section2 : {alpha: -31, beta: 19}
}
const { section1 : { alpha: alpha1, beta : beta1 }} = marks
console.log(alpha1, beta1)