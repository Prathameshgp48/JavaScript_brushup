// singleton: object made with constructor
//Object.create

//Object literals: 

//->Symbol as a key
const mySym = Symbol("mykey1")

const JsUser = {
    name: "Patt",
    "full name": "Patt Parker",
    // mySym: "key", consider mySym as string
    [mySym]: "key",  //consider mySym as symbol
    age: 20,
    location: "Mumbai",
    email: "patt4@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(JsUser.name)
console.log(JsUser["age"])
console.log(JsUser["full name"])
// console.log(JsUser[mySym], typeof JsUser[mySym])

//-> modifying the values
JsUser.email = "patt4@microsoft.com"
//freezing the object so that no changes reflected
// Object.freeze(JsUser)
// JsUser.email = "patt4@openai.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log(`Hello ${JsUser["name"]}`)
}

JsUser.welcome = function() {
    console.log(`Welcome ${this["full name"]}`)
}

console.log(JsUser.greeting())
console.log(JsUser.welcome())
