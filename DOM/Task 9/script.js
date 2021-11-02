// write a script using the method queryselector that goes into lowest depth div and deletes it, Alternatively also write
// one line non recusrive solution using queryselectorAll



// SOLUTION 1

let divEle = document.querySelector('div')

while(divEle.children.length > 0){
    divEle = divEle.children[0]
}

divEle.remove()




// SOLUTION 2

function removeDeepest(divEle){
    if(divEle.children.length === 0){
        divEle.remove()
    }
    removeDeepest(divEle.children[0])
}

removeDeepest(divEle)



// ONE LINER SOLUTION

document.querySelectorAll('div')[3].remove()

