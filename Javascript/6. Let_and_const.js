// TEMPORAL DEAD ZONE
// BLOCK SCOPED
// VARIABLE SHADOWING
// VAR / LET / CONST


// -----------------------

// this is the temporal dead zone fror varName

// -----------------------

// console.log('line number 13', varName) 
// here varName is accessed under its temporal dead zone so it will give us an error
let varName = 65
console.log('line number 16', varName)

// only one example of illegal shadowing

let varName = 99
{
    var varName = 56;
    console.log(varName)
}
console.log(varName)


// keyword   scope      reassign  redeclare   temporal dead zone
// var      function    true        true        NO
// let      block       true        false       YES
// const    block       false       false       YES