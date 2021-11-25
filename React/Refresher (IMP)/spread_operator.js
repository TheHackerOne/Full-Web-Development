
// Wrong way to copy an object because it simply does shallow copy and thats why it is not recommended

let oba1 = {
    name: "Yash Chaudhary",
    info:{
        location:{
            country : "india",
            state :"New Delhi"
        },
        address: "Shiv Nagar"
    }
}

let oba2 = oba1;
oba1.name = "Teena Chaudhary"
// console.log(oba1);
// console.log(oba2);

// still a wrong way, because internal objects are still shallow copied
let obb1 = {
    name: "Yash Chaudhary",
    info:{
        location:{
            country : "india",
            state :"New Delhi"
        },
        address: "Shiv Nagar"
    }
}

let obb2 = {...obb1}
obb1.info.address = "Afganistan"
// console.log(obb1);
// console.log(obb2);

// CORRECT WAY 1

let obc1 = {
    name: "Yash Chaudhary",
    info:{
        location:{
            country : "india",
            state :"New Delhi"
        },
        address: "Shiv Nagar"
    }
}

let obc2 = {...obc1, info:{...obc1.info}, location:{...obc1.info.location}}
obc1.info.address = "Afganistan"
// console.log(obc1);
// console.log(obc2);

// CORRECT WAY 2
let obd1 = {
    name: "Yash Chaudhary",
    info:{
        location:{
            country : "india",
            state :"New Delhi"
        },
        address: "Shiv Nagar"
    }
}

let obd2 = JSON.parse(JSON.stringify(obd1))
obd1.info.address = "Afganistan"
console.log(obd1);
console.log(obd2);