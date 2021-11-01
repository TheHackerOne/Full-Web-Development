// style property DOM
// Children -> return HTMLCollection

// childNodes -> return nodeList -> forEach can be used here

// All HTML elements are nodes but all nodes(such as comment) are not HTML elements

let select = document.querySelector('select')
let allMovies = document.querySelectorAll('.movies')

select.addEventListener('change', (e) => {
    let selectValue = select.value
    if(selectValue === 'none'){
        allMovies.forEach((movie) => {
            movie.style.display = 'block'
        })
    }else{
        allMovies.forEach((movie) => {
            let category = movie.querySelector('p').getAttribute('data-category')
            if(selectValue !== category){
                movie.style.display = 'none'
            }else{
                movie.style.display = 'block'
            }
        })
    }
})