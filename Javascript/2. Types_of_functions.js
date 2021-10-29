// FIRST CLASS CITIZENS
// functions are treated as variables
console.log("is it running")

// 1. assignment -> function expression
var fuck = function(){
    console.log("this is a function expression");
}

// 2. functions can be passed as parameters

function outer(param){
    console.log("i am outer", param)
    param();
}

function inner(){
    console.log("i am inner")
}

outer(inner);

// 3. functions can return functions also

function main(){
    console.log('main function')
    return function not_main(){
        console.log('i am not main but returned by main function')
    }
}

let newFunc = main();
newFunc();

// 4. IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function(){
    console.log('hi i am a IIFE')
})()
