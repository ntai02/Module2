// const cars1 = ['AUDIO','BMW','TATA','MERCEDES']
// // const cars2 = [... cars1]
// const cars2 = ['NISSAN','TOYOTA']
// const cars3 = [...cars1,...cars2]
//
// // console.log(cars1)
// // console.log(cars2)
// console.log(cars3)
// const cars1 = {
//     Brand : "BMW",
//     Color : "Red"
// }
// const cars2 = {...cars1}
// console.log(cars2)
// const cars1 = {
// //     Brand : "Toyota",
// //     Color : "RED"
// // }
// // const cars2 = {
// //     Brand: "Nissan",
// //     Color : "BLUE",
// //     Year : 2004
// // }
// //
// // const cars3 = {...cars1,...cars2}
// // console.log(cars3)
// const cars1 = "AUDI"
// const a = [...cars1]
// console.log(a)
const numbers = [3,5,7,8,9]
const [a,b,c,...other] = numbers
console.log(a)
console.log(b)
console.log(c)
console.log(other)