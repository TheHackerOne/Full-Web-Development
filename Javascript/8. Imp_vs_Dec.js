// IMPERATIVE

let a = 4;

let square = a*a;

let isEven = false;

if(a*a % 2 == 0){
    isEven = true;
}

if(isEven) console.log('a is even')
else console.log('a is odd')

// DECLARATIVE

let isEvenNum = (a) => (a*a % 2 === 0 ? true : false)

console.log(isEvenNum(6))