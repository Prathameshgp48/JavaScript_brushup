// Primitives (call by value -> copy of value is given) 7 types
// String, Number, Boolean, null(empty not zero), undefined(variable declared but value not assigned)
// symbol, BigInt (data-type for larger values)
// 
const score = 100
const scoreValue = 100.3
const isLoggesIn = false
const outsideTemp = null
const userEmail = undefined

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 234254235245345232353n

// REFERENCES(non primitives-> direct reference)
// Array, Objects, functions
const heroes = ["Luffy", "Naruto", "Tanjiro", "kenshin", "Gojo", "Isagi"]
let obj = {
    name: "Patty",
    marks: 40
}

const copyHeros = [...heroes]
copyHeros.splice(heroes.length-1, 1)

// console.log(copyHeros, heroes)

const myFunction = function() {
    console.log("Hello Developer")
}

// console.log(typeof userEmail)
// console.log(typeof outsideTemp) //null type will be given as object
// console.log(typeof myFunction)

//stack(primitives) , heap(non primitives)
let ytName = "hellocodedotcom"
let anotherName = ytName
console.log(ytName, anotherName)
//both will be stored in stack and anotherName will be given copy of ytName instead of reference

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "patty@gmail.com"
//here both object variables are stored in stack
//their values will be stored in heap with same refernce
console.log(userOne, userTwo)
//change in one reflect to original one as both are using same reference