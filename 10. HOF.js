let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// map

let newArr = arr.map((ele, idx) => {
    return ele*ele
})

console.log(newArr)

// filter

let newArr1 = arr.filter((ele, idx)  => {
    return ele%2 === 0
})

console.log(newArr1)

// reduce

let sumAll = arr.reduce((sum, ele) => {
    return sum + ele
}, 0)


console.log(sumAll)
