// BROWSER AND NON STRICT MODE FOR REACT

// "this" basically stores the reference of the object through which it is called

console.log(this) // this returns window object

function func(){
    console.log(this) // this return window object 
}

func();

let obj = {
    name: "yash chaudhary",
    age: 23,
    fun: func
}

obj.fun(); // this call will return "obj" because it's the obj object through which the function is called.

//  Another example

function func1(){
    console.log(this) // this return obj1 object
    function abc(){
        console.log(this) // this returns windows object
    }
    abc()
    // ALTERNATIVE
    // let ret = abc.bind(this) USING BIND FUNCTION
    // ret()
}

let obj1 = {
    name: "yash chaudhary",
    age: 23,
    fun: func1
}

obj1.fun();

// Another example
// use of arrow function helps the normal function call( abc() ) to bind with its parent calling object
function func2(){
    console.log(this) // this return obj2 object
    abc = () => {
        console.log(this) // this returns obj2 object
    }
    abc()
}

let obj2 = {
    name: "yash chaudhary",
    age: 23,
    fun: func2
}

obj2.fun();



