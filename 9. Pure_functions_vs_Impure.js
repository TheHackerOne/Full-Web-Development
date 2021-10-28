// pure functions are those functions in which for a particular input, the output always remains the same and anything
// thats been used in the function must not be related to outside/external code

// impure function

let a = 9

function fn(b){
    console.log('hi i am yash chaudhary')
    console.log(a+b)
}

fn(5);

// impure function

function fn1(a, b){
    console.log('sum is ', a+b)
}

fn1(4, 6)

// pure function

function fn2(a, b){
    return a+b;
    // all the paramteres that are used are not related to the external code/ world
    // console.log can not be used inside a pure function becuase console is used to access the screen which is a part
    // of outside world/code
    // pure functions give same output for same set of input always
}

console.log(fn2(5, 7))





