const colors = ["green", "red", "rgba(133, 244, 245)", "#f15025"]

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


let colorName = document.getElementsByClassName('main--color-name')[0]
let mainBody = document.getElementsByClassName('main')[0];
let btn = document.getElementsByClassName('main_btn--btn')[0]

let simpleBtn = document.getElementsByClassName('simple')[0]
let hexBtn = document.getElementsByClassName('hex')[0]

simpleBtn.classList.add('on')

let simpleMode = true

hexBtn.addEventListener('click', ()=>{
    simpleMode = false;
    simpleBtn.classList.remove('on')
    hexBtn.classList.add('on')
})

simpleBtn.addEventListener('click', ()=>{
    simpleMode = true
    hexBtn.classList.remove('on')
    simpleBtn.classList.add('on')
})

colorName.innerText = colors[getRandomNumber()]
mainBody.style.backgroundColor = colors[getRandomNumber()]

function getRandomNumber(){
    if(simpleMode)
        return Math.floor(Math.random()*colors.length);
    else 
        return Math.floor(Math.random()*hex.length);
}

btn.addEventListener('click', (e)=>{
    if(simpleMode){
        let idx = getRandomNumber()
        colorName.innerText = colors[idx]
        mainBody.style.backgroundColor = colors[idx]
        btn.style.backgroundColor = colors[idx]
    }else{
        let color = "";
        for(let i=0;i<6;i++){
            let idx = getRandomNumber();
            color += hex[idx];
        }
        colorName.innerText = `#${color}`
        mainBody.style.backgroundColor = `#${color}`
        btn.style.backgroundColor = `#${color}`
    }
})
