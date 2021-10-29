// serial execution using callback

console.log("Before")

let fs = require('fs')

fs.readFile('f1.txt', cb)

function cb(err, data){
    console.log('Content ' + data)
    fs.readFile('f2.txt', cb1)
    function cb1(err, data){
        console.log('Content ' + data)
        fs.readFile('f3.txt', cb2)
        function cb2(err, data){
            console.log("Content " + data)
        }
    }
}

console.log("After")

// parallel execution using callback

console.log("Before")
fs.readFile('f1.txt', cbe)
fs.readFile('f2.txt', cbe1)
fs.readFile('f3.txt', cbe2)

function cbe(err, data){
    console.log("Content " + data)
}

function cbe1(err, data){
    console.log('Content '+ data)
}

function cbe2(err, data){
    console.log("Content " + data)
}
console.log("After")


