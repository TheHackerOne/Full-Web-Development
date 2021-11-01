// e.stopPropogation
// e.stopImmediatePropogation

let orange = document.querySelector('.orange')
let blue = document.querySelector('.blue')
let yellow = document.querySelector('.yellow')

orange.addEventListener('click', (e) => {
    alert('orange')    
    alert(e.eventPhase)
    // 0 for capturing phase
    // 1 for target phase
    // 2 for bubbling phase
})

blue.addEventListener('click', (e) => {
    alert('blue 1')
    // console.log(e.target)
    // console.log(e.currentTarget)
    // e.stopPropagation()
    // e.stopImmediatePropagation()
})

blue.addEventListener('click', (e) => {
    alert('blue 2')
})

yellow.addEventListener('click', (e) => {
    alert('yellow')
})

// true is for capturing phase
// false is default and is for bubbling phase