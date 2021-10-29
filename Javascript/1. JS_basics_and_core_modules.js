let obj = {
    name: "yash chaudhary",
    age: "56",
    college: "Maharaja Surajmal Institute of Technology",
    fatherName: "Anoop Chaudhary",
    out: function(){
        return("function of an object");
    },
    siblings: ["teena", "swati", "rinki"],
}

// add a property
obj.newEle = "New Element Added"
console.log("New Element is ->",obj.newEle);
// set a property
obj.age = "99"
console.log("Set property -> ",obj.age)
// get a property
let props = "college"
console.log(obj[props]);
console.log(obj.college);
// Delete a property
delete obj.college
console.log("College name is -> ",obj.college)

// ARRAYS

// push/unshift to add element at the end and beginning
let arr = [1, 2, 3, 4]
arr.push("Last Element");
arr.unshift("First Element");
console.log(arr)

// remove element from array
// Slice does not change the original array, it returns a sliced array
let newArr = arr.slice(1, 3) // [startIdx endIdx) [)
console.log(newArr)
console.log(arr)

// pop/shift to remove element from the end and beginning respectively
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);

// Splice
// changes the original array
arr.push("Last Element");
arr.unshift("First Element");
console.log(arr)
arr.splice(1, 2); // startIdx, lengthToRemove
console.log(arr);

// index of/ contain
console.log(arr.indexOf(3))
console.log(arr.indexOf(2))
let isPresent = arr.includes('Last Element')
if(isPresent)
    console.log("String is Present")


// String
let s1 = 'single quote ki string'
let s2 = "double quote ki string"
let ch = s1.charAt(4)
let ascii = s1.charCodeAt(4)
let substr = s1.substring(1, 4) // start, end
let substr1 = s1.substr(1, 4) // start, length
console.log(ch)
console.log(ascii)
console.log(substr)
console.log(substr1)

// split and join
let r = s1.split(' ')
console.log(r)
let y = r.join("{}")
console.log(y)



/////////////////////////////////////////

let inputArr = process.argv.slice(2);
// for command line arguments

/////////////////////////////////////////

// CHILD PROCESS
let cp = require("child_process");
console.log("Trying to open our 💗");
// cp.execSync("code");
cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("opened our 💗");
let output = cp.execSync("node abc.js");
console.log("output 🔥 " + output);


/////////////////////////////////////////

// FILE SYSTEM

// files -> create ,        read,                   update ,  delete
// open -w ,                readfileSync         appendFile   unlinkSync
// writefileSync

let fs = require("fs");
// read
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data " + buffer);
// create 
// fs.openSync("abc.txt", "w");
// no file -> create and file  exist-> content replace 
// create write
// fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");
// update
// fs.appendFileSync("abc.txt", "Bhai khush kyu nhi hai");

// folder(directory)
// create       read            delete 
// mkdirSync    readdirSync     rmdirSync

// fs.mkdirSync("meriDirectory");

// fs.writeFileSync("meriDirectory/merifile.txt", "Mera content");
// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for (let i = 0; i < content.length; i++) {
//     console.log("file ", content[i], "is removed");
//     // remove file
//     fs.unlinkSync("meriDirectory/" + content[i]);
// }
// remove folder
// fs.rmdirSync("meriDirectory")
// fs.existSync -> if a file exist at a path -> true/false
// let doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);
// doesPathExist = fs.existsSync("abcd.txt");
// console.log(doesPathExist);
// // fs.lstatSync-> fs.lstatSync
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);

// C:\Users\Ritik Singh\Desktop\Youtube\Practical Web Development\Fun with Nodejs\myfolder
// C:\Users\Ritik Singh\Desktop\Youtube\Practical Web Development\Fun with Nodejs\abc.js
for (let i = 1; i <= 10; i++) {
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake + "\\"+"readme.md",` # readme for ${dirPathToMake}`);
}


/////////////////////////////////////////

// OPERATING SYSTEM

// os feature 
let os = require("os");
// console.log(os.arch());
// console.log(os.platform());
console.log(os.networkInterfaces());
// console.log(os.cpus());




/////////////////////////////////////////

// PATH

let path = require("path");
// for (let i = 1; i <= 10; i++) {
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(path.join(dirPathToMake, "readme.md"), ` # readme for ${dirPathToMake}`);
// }
let ext = path.extname(path.join(__dirname, "abc.js"));
console.log("ext", ext);
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);