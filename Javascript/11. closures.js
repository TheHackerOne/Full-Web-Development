// a closure is the combination of a function bundled together with refernces to its 
// lexical enviroment

// when functions are returned from other functions they remember and have access to 
// their lexical scope, in other words the whole closure is returned

function z(){
    let b = 898
    function x(){
        let a = 745;
        function y(){
            console.log(a, b)
        }
        return y;
    }
    return x()
}

let ax = z();
ax();






