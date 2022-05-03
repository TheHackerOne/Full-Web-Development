let data = [
    {
        name: "Anna Johnson",
        image: 'p1.jpg',
        designation: 'Web designer',
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus libero corrupti soluta veniam sed molestias sit, ex accusantium quos illum nulla neque itaque tempore est eaque corporis, consequatur quibusdam odio quae ad enim in vero.'
    },
    {
        name: "peter jones",
        image: 'p2.jpg',
        designation: 'intern',
        bio: 'Earth science or geoscience includes all fields of natural science related to the planet Earth. This is a branch of science dealing with the physical, chemical, and biological complex constitutions and synergistic linkages '
    },
    {
        name: "bill anderson",
        image: 'p3.jpg',
        designation: 'The boss',
        bio: 'There are both reductionist and holistic approaches to Earth sciences. It is also the study of Earth and its neighbors in space. Some Earth scientists use their knowledge of the planet to locate and develop energy and mineral resources.'
    },
    {
        name: "susan smith",
        image: 'p4.jpg',
        designation: 'Web developer',
        bio: 'Others study the impact of human activity on Earths environment, and design methods to protect the planet. Some use their knowledge about Earth processes such as volcanoes'
    },
]

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const click = document.querySelector('.click')

const Name = document.querySelector('.name')
const Designation = document.querySelector('.designation')
const Bio = document.querySelector('.bio')
const Image = document.querySelector('.img')

const getRandomNum = () => {
    return Math.floor(Math.random()*data.length)
}


let curr = 0
let setUserData = () => {
    Name.innerText = data[curr].name
    Designation.innerText = data[curr].designation
    Bio.innerText = data[curr].bio
    Image.setAttribute('src', `./${data[curr].image}`)
}

setUserData()

click.addEventListener('click', () => {
    curr = getRandomNum()
    setUserData()
})

prev.addEventListener('click', () => {
    curr -= 1
    if(curr < 0)
        curr = curr + data.length
    setUserData()
})

next.addEventListener('click', () => {
    curr += 1
    curr = curr%data.length
    setUserData()
})