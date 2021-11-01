// HTML collection VS Node list
// insertBefore -> paret Element, element before which it must be inserted, element to be added




let list = document.querySelectorAll('li')
let btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
    let parentEle = document.querySelector('ul')
    let element = document.createElement('li')
    element.innerHTML = '6'
    let afterElement = list[5]
    parentEle.insertBefore(element, afterElement)
})