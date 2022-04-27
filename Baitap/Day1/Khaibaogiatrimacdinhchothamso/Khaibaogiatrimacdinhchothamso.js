// function lastIndexof(arr, elt, start) {
//     for (let i = start -1; i >= 0; i --) {
//         if (arr[i] === elt) {
//             return i
//         }
//     }return -1
// }
//
// console.log(lastIndexof([1,2,1,2],2))
let lastIndexOf = (arr, elt, start = 5) => {

    for (let i = start - 1; i >= 0; i--) {

        if (arr[i] === elt) {
            return i
        }

    }
    return -1

}
console.log(lastIndexOf([1, 2, 1, 2], 2))