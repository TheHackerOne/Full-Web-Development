const decrease = document.getElementsByClassName('decrease')[0]
const reset = document.getElementsByClassName('reset')[0]
const increase = document.getElementsByClassName('increase')[0]

const val = document.getElementById('value')
console.log(val)

let value = +val.innerText

function updateColor(){
    if(value < 0) val.style.color = 'red';
    else if(value == 0) val.style.color = 'black'
    else val.style.color = 'green'
}

decrease.addEventListener('click', ()=>{
    value -= 1;
    val.textContent = value;
    updateColor();
})

increase.addEventListener('click', ()=>{
    value += 1;
    val.textContent = value;
    updateColor();
})

reset.addEventListener('click', ()=>{
    value = 0;
    val.textContent = value;
    updateColor();
})

