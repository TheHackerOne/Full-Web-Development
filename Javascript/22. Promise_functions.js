// PROMISE.ALL() METHOD

let p1 = new Promise(function(resolve, reject){
    resolve('p1 is Resolved')
})

let p2 = new Promise(function(resolve, reject){
    reject('p2 is Rejected')
})

let p3 = new Promise(function(resolve, reject){
    resolve('p3 is Resolved')
})

let promiseAll = Promise.all([p1, p2, p3])

promiseAll
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})

// promise.race() method

Promise.race([p1, p2, p3])
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})


// promise.allsetteled() method

Promise.allSettled([p1, p2, p3])
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})


// promise.finally() for clean up activites

function fn(){
    let a = 1 + 1;
    return new Promise(function(resolve, reject){
        if(a === 2){
            resolve('Promise is resolved')
        }else{
            reject('Promise is Rejected')
        }
    })
}

fn()
.then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    // clean up activites
    console.log("Experiment is completed")
})