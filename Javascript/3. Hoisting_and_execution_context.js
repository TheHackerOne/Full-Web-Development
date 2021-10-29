// by default browser has a WINDOW and "this" object

// by default node js has a GLOBAL and "this" object and 
// "this" object is initially empty

// GLOBAL EXECUTION CONTEXT is created at first

// MEMORY ALLOCATION PHASE

// HOISTING is JavaScript's default behavior of moving declarations 
// to the top.

// MEMORY ALLOCATION takes place in which VARIABLES are given UNDEFINED value
// and FUNCTIONS are completely allocated memory at the memory allocation phase

// for every function a new EXECUTION CONTEXT IS CREATED

 // TEMPORAL DEAD ZONE IS CREATED IN THE CASE OF LET AND CONST


 // INTERVIEW QUESTIONS

 // 1.
 console.log('line number 1', varName)
var varName = 10;
console.log('line number 3', varName)
function fn(){
    console.log('line number 5', varName)
    var varName = 20;
    console.log('line number 7', varName)
}
fn();
