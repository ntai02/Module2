var Fibonacci = function () {
    var a = 0;
    var b = 1;
    var sum = 0;
    for (var i = 1; i <= 10; i++) {
        console.log(a + ' ');
        sum += a;
        var c = a + b;
        a = b;
        b = c;
    }
    console.log(sum);
};
Fibonacci();
