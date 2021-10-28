// currying using bind method

function add(a, b){
    console.log(a + b)
}

let addWith2 = add.bind(this, 2)
addWith2(3)

// currying with closures

function multiply(x){
    function b(y){
        console.log(x*y)
    }
    return b
}

let multiplyWith3 = multiply(3)
multiplyWith3(5)