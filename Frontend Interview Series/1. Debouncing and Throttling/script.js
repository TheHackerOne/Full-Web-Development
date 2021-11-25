let input = document.querySelector('input');

let text = document.querySelector('#textContent');

function work(){
    console.log("api call....")
}

// debouncing
// definition
// In the debouncing technique, no matter how many times the user fires the event, the attached function will be executed only after the specified time once the user stops firing the event.
function debounce(work, delay){
    let timerId;
    return function(){
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            work()
            text.innerText = `${input.value}`;
        }, delay);
    }
}

// throttling
// definition
// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.
function throttling(work, interval){
    let flag = true;
    return function(){
        if(flag){
            work();
            
            flag = false;
            setTimeout(() => {
                flag = true;
            }, interval);
        }
    }
}

let optFunc = debounce(work, 500)

input.addEventListener('keydown', optFunc)