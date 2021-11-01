// previousElementSibling -> return HTML element
// nextElementSibling -> return HTML element
// previous Sibling -> return node
// next Sibling -> return node

let redEle = document.querySelector('.red')

function deleteAllSiblings(redEle){
    let beforeEle = redEle.previousElementSibling
    let afterEle = redEle.nextElementSibling
    while(beforeEle){
        beforeEle.remove()
        beforeEle = redEle.previousElementSibling
    }

    while(afterEle){
        afterEle.remove()
        afterEle = redEle.nextElementSibling
    }
}

deleteAllSiblings(redEle)

