let section1 = document.querySelector('.s1')
let section2 = document.querySelector('.s2')
let section3 = document.querySelector('.s3')

document.documentElement.addEventListener('keydown', (e) => {
    console.log("something happened")
    let key = e.key
    if(key === '1'){
        section1.scrollIntoView()
    }else if(key === '2'){
        section2.scrollIntoView()
    }else if(key === '3'){
        section3.scrollIntoView()
    }else if(key === 't'){
        window.scrollTo(0, 0)
    }else if(key === 'b'){
        let body = document.querySelector('body')
        let dimensions = body.getBoundingClientRect()
        window.scrollTo(0, dimensions.height)
    }
})