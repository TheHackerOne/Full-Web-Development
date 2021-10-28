let obj1 = {
    name :"sukanya",
    age: 11,
    printDetails: function (){
        console.log(this.name + " " + this.age)
    }
}

let obj2 = {
    name: "yash",
    age: 34
}

// funtion borrowing
obj1.printDetails.call(obj2)


//////////////////////////////////////

let person1 = {
    name : "yash chaudhary", 
    age : 35
}

let person2 = {
    name: 'Steve jobs',
    age : 45
}

function showDetails(city, car){
    console.log(`${this.name} is ${this.age} years old and lives in ${city} and drives ${car}`)
}

showDetails.call(person1, 'new delhi', 'BMW')

showDetails.apply(person2, ['Bombay', 'Mercedes'])

let showDetailsBindfunc = showDetails.bind(person1, 'New York', 'Ford figo')
showDetailsBindfunc()