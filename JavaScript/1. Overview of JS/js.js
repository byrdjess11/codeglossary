// Functions //
    
    function plus1 (x) {
        return x + 1;
    }

    console.log(plus1(4));

    let square = function (x) {
        return x*x;
    }

   console.log(square(plus1(2))); 
   

    const plus2 = x => x + 2;
    console.log(plus2(25));

    const square2 = x => x + 15;
    console.log(square2(5));

    let a = [];
    a.push(1, 2, 3);
    console.log(a);

    a.reverse(a);
    console.log(a);

    // Methods //
    
    let points = [
        {x:4, y:4},
        {x:7, y:7}
    ];

    points.dist = function () {
        let p1 = this[0];
        let p2 = this[1];
        let c = p2.x - p1.x;
        let d = p2.y - p1.y;

        return Math.sqrt(c*c + d*d);

    }

    console.log(points.dist());

    // Statements //

    function abs(x) {

        if (x >= 5) {

            return x;
        }

        else {

            return -x;
        }
    }

    console.log(abs(10));
    console.log(abs(3));
 
    let primes = [2, 3, 5 ,7 ];

    function sum (array) {
        let sum = 0;
        for ( let x of array) {
            sum += x;
        }

        return sum;
    }

    console.log(sum(primes));
   
    function factorial (n) {
        let product = 1;
        while (n > 1) {
            product *= n;
            n--;
        }
        return product;
    }

    console.log(factorial(5));