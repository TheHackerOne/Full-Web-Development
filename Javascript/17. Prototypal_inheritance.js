let person1 = {
    name: "Yash Chaudhary",
    age: 25,
    func: function(){
        console.log(this.name + " " + this.age)
    }
}

let person2 = {
    name: "Yathaarth suri"
}

person2.__proto__ = person1

console.log(person2.name + " " + person2.age)
person2.func()