let a = 300
if(true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner", a)
}

console.log(a)  
// console.log(b)  //not defined
// console.log(c)  //30 not support block scope

function one() {
    const username = "patty"
    function two() {
        const website = "pinterest"
        // console.log(username)
    }
    // console.log(website)  //local var of function two
    two()
}

one()

//++++Interesting++++(mini-hoisting)
//mini hoisting- calling function before its declaration
console.log(addOne(4))

function addOne(num) {
    return num+1
}

// console.log(addTwo(5)) //function expression dont allow hoisting
const addTwo = function (num) { //function expression
    return num+2
}
console.log(addTwo(5))