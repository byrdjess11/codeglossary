
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

    // //
    
    let points = [
        {x:0, y:0},
        {x:1, y:1}
    ];

    points.dist = function () {
        let p1 = this[0];
        let p2 = this[1];
        let a = p2.x - p1.x;
        let b = p2.y - p1.y;

        return Math.sqrt(a*a + b*b);
    }

    console.log(points.dist);