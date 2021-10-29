// reading files parallelly using promises

const fs = require('fs')

let fileRead1 = fs.promises.readFile('f1.txt')

let fileRead2 = fs.promises.readFile('f2.txt')

let fileRead3 = fs.promises.readFile('f3.txt')

fileRead1.then(res => {
    console.log('Content -> ' + res)
})

fileRead2.then(res => {
    console.log('Content -> ' + res)
})

fileRead3.then(res => {
    console.log('Content -> ' + res)
})


// reading files in a serial way using promises

fileRead1.then((data) => {
    console.log('Content serial -> ' + data)
    fileRead2.then((data) => {
        console.log('Content serial -> ' + data)
        fileRead3.then((data) => {
            console.log('Content serial -> '+ data)
        })
    })
})
