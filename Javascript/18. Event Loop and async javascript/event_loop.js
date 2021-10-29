// All the callback functions which comes through promises will go inside the microtask queue which has a 
// higher priority than the callback queue

// promises and mutation observer callbacks goes in the microtask queue

console.log("After")

setTimeout(() => {
    console.log("I am inside the setTimeout callback function so i will get in the callback queue when my work is done ")
}, 5000);

fetch('https://www.google.com/')
    .then(() => {
        console.log("I am inside the fetch callback which is based on promises so i will get into microtask queue which has higher priority than the callback queue")
    })
    .catch(err => {
        console.log(err)
    })


console.log("before")