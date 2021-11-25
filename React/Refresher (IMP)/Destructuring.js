// ARRAY DESTRUCTRUNG
let arr = ['hi', 'i', 'am', 'yash'];

let [a, , c, d] = arr;

console.log(a, c, d);

// OBJECT DESTRUCTURING
let obj = {
    name: "yash chaudhary",
    age: 23,
    location:{
        country: "india",
        state: "New Delhi"
    }
}

let {name:firstName, age, location:{country:place, state:district}} = obj;
console.log(firstName, location);