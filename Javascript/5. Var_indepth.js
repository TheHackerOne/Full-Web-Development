var varName = 10
console.log('line number 2', varName)
varName = 20;
console.log('line number 4', varName)

var varName = 99
console.log('line number 7', varName)
var varName;
console.log('line number 9', varName)

// var variables can be re-declared and if they are not assigned any value then the previous value is carry forwarded
// there is nothing more powerful than a humble person with a warrior spirit who is working towards something which is bigger than himself

// VAR is function scoped
// LET and CONST are block scoped

// QUESTION 1

function fn(){
    console.log(a)
    var a = 10
    console.log(a)
    if(a == 10){
        var a; // this will get old value of a as carry forward
        console.log(a)
    }
    console.log(a)
}

fn()

// QUESTION 2

function fn(){
    console.log(a)
    var a = 10
    console.log(a)
    if(a == 10){
        var a = 20; 
        console.log(a)
    }
    console.log(a)
}
fn()

// QUESTION 3
var a = 10
console.log('line number 2', a)
function fn(){
    console.log('line number 4', a)
    var a = 20
    a++;
    console.log('line number 7', a)
    if(a){
        var a = 30;
        a++
        console.log('line number 11', a)
    }
    console.log('line number 13', a)
}
fn()
console.log('line number 16', a)

// line number 2 10
// line number 4 undefined
// line number 7 21
// line number 11 31
// line number 13 31
// line number 16 10