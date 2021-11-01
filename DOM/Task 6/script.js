let square = document.querySelector('div')

square.addEventListener('mouseenter', (e) => {
    console.log("enter")
    square.style.backgroundImage = 'url("https://image.shutterstock.com/image-illustration/prison-interior-jail-cells-shadows-260nw-1118920109.jpg")';
})

square.addEventListener('mouseleave', (e) => {
    square.style.backgroundImage = 'none'
})