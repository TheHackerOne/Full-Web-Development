// getAttribute
// setAttribute
// classList -> add, remove, contains

let allCards = document.querySelectorAll('div')

allCards.forEach((card) => {
    card.addEventListener('click', () => {
        let color = card.getAttribute('data-color')
        card.setAttribute('data-color', 'used')
        card.classList.add(color)
    })
})