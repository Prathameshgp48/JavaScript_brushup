const user = {
    username: "Patty",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome aboard!`)
        console.log(this) //here, 'this' refer user which a global object as context
    }
}

//this refers to golbal object.


// user.welcomeMessage()
// user.username = "Parker"
// user.welcomeMessage()

// console.log(this) //{}  context is empty for node
// in case of browser, context or global object is window for browser

function chai() {
    let username = "chai" //local varible
    console.log(this)//here this refers to global object 
    console.log(this.username) //undefined because username is not the part of global object
}
chai()

//ARROW FUNCTION
// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

//implicit return
// const addTwo = (num1, num2) => num1+num2
const addTwo = (num1, num2) => (num1+num2)

// console.log(addTwo(4,5))