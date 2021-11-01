// Event Listeners -> Keyboard, Mouse, Async
// Document.methods
// QuerySelector/All
// innerText / innerHTML
// createElement
// appendChild

let btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
    let newEle = document.createElement('li')
    newEle.innerHTML = 'Hello Guyss .........'
    let parentEle = document.querySelector('body')
    parentEle.appendChild(newEle)
})