
let inputEle = document.querySelector('input')
let pEle = document.querySelector('p')
let shiftKey

inputEle.addEventListener('keydown', (e) => {
    if(!shiftKey){
        e.preventDefault()
    }
    if(e.getModifierState('CapsLock')){
        pEle.style.display = 'block'
        e.preventDefault()
    }else{
        pEle.style.display = 'none'
    }
})

document.documentElement.addEventListener('keyup', (e) => {
    let key = e.key
    if(key === 'Shift'){
        shiftKey = false
    }    
})

document.documentElement.addEventListener('keydown', (e) => {
    let key = e.key
    if(key === 'Shift'){
        shiftKey = true
    }
})