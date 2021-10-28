// browser non strict

// console.log(this) -> window Object
// function -> window Object
// function inside Object -> Object itself
// function inside function of obj -> window Object

// browser strict

// console.log(this) -> window Object
// function -> undefined Object
// function inside Object -> Object itself
// function inside function of obj -> undefined Object

// node non strict

// console.log(this) -> {}
// function -> global Object
// function inside Object -> Object itself
// function inside function of obj -> global Object

// node strict

// console.log(this) -> {}
// function -> undefined
// function inside Object -> Object itself
// function inside function of obj -> undefined