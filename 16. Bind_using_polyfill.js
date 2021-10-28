// normal bind

let person1 = {
    name: "yash chauhdary",
    age: 34
}

function showDetails(city, district){
    console.log(this.name + " " + this.age + " " + city + " " + district)
}

let showDetailsBind = showDetails.bind(person1)
showDetailsBind('New Delhi', 'JanakPuri')



// bind using polyfill

Function.prototype.myBindFunction = function(...args){
    let showDetailsRef = this
    let args1 = args.slice(1)
    return function(...params){
        showDetailsRef.apply(args[0], [...args1, ...params])
    }
}

let showDetailsBindPolyfill = showDetails.myBindFunction(person1)
showDetailsBindPolyfill('New York', 'Manhattan')