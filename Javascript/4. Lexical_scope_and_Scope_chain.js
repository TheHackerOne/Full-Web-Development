

// SCOPE -> Area where function or a variable can be found

// LEXICAL ENVIROMENT ->  lexical enviroment is the LOCAL MEMORY along with the LEXICAL ENVIRONMENT OF ITS PARENT

// QUESTION 1

console.log('line number 1', varName)
var varName = 10;
console.log('line number 3', varName)
function fn(){
    console.log('line number 5', varName)
    var varName = 20;
    function b(){
        console.log('i am in b', varName)
    }
    b()
    console.log('line number 7', varName)
}
fn();

// QUESTION 2

console.log('line number 22', varName)
var varName = 10;
// this function is important and tricky to understand lexical environment
function b(){
    console.log('line number 25', varName);
}
console.log('line number 27', varName)
function fn(){
    console.log('line number 29', varName)
    var varName = 20
    b()
    console.log('line number 32', varName)
}
fn()









