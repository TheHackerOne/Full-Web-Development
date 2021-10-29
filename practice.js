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