let arr = [1, 2, 3, 4, 5, 6]

// map

Array.prototype.arrMethodMap = function(cb){
    let newArr = []

    for(let i = 0; i < this.length ; i++){
        newArr.push(cb(this[i]))
    }

    return newArr
}

let newArr = arr.arrMethodMap(function cb(x){
    return x*x
})

console.log(newArr)



// filter

Array.prototype.arrMethodFilter = function(cb){
    let newArr = [];

    for(let i = 0; i < this.length ; i++){
        if(cb(this[i]))
            newArr.push(this[i])
    }

    return newArr
}

function cb1(x){
    return x % 2 == 0
}

console.log(arr.arrMethodFilter(cb1))


// reduce

console.log(arr.reduce((sum, ele) => {
    return sum + ele
}, 0))

Array.prototype.arrMethodReduce = function(cb){
    let sum = 0;
    for(let i=0;i<this.length;i++){
        sum = cb(sum, this[i])
    }
    return sum
}

function cb2(sum, ele){
    return sum + ele;
}

console.log(arr.arrMethodReduce(cb2))