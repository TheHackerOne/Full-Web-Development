// CALLBACK

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function fn(param, cb){
    console.log('I am main function', param)
    cb() 
}

function cb(param){
    console.log('i am a callback function', param)
}

fn("Yash Chaudhary", cb)

// What is callback hell?
// This is a big issue caused by coding with complex nested callbacks. Here, each and every callback takes an argument that is a result 
// of the previous callbacks. In this manner, The code structure looks like a pyramid, making it difficult to read and maintain. 
// Also, if there is an error in one function, then all other functions get affected.

// PROMISES

// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous 
// operations where callbacks can create callback hell leading to unmanageable code. 

// Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code. 
// Multiple callback functions would create callback hell that leads to unmanageable code. 
// Events were not good at handling asynchronous operations.

// BENIFITS OF PROMISES
// Improves Code Readability
// Better handling of asynchronous operations
// Better flow of control definition in asynchronous logic
// Better Error Handling

// A PROMISE HAS FOUR STATES
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

function promise(){
    return new Promise(function fn(resolve, reject){
        let str1 = 'yash'
        let str2 = 'tina'
        setTimeout(() => {
            // do something, API call
            if(str1.length === str2.length){
                resolve('String length is equal')
            }else{
                reject('String length is not equal')
            }
        }, 4000);    
    })
}

console.log("Before")

promise()
.then(function(successMessage){
    console.log('after promise is resolved', successMessage)
})
.catch(function(err){
    console.log(err)
})

console.log('After')


// ASYNC AND AWAIT

async function fn1(){
    console.log('before')
    let prom = await promise()
    console.log('after')
    console.log(prom)
}
fn1()