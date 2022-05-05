let Fibonacci = () => {
    let a = 0
    let b = 1
    let sum = 0
    for (let i = 1; i <= 10; i++){
       console.log(a+ ' ')
        sum += a
        let c = a+b
        a = b
        b = c
    }
    console.log(sum)
};
Fibonacci()