// const tinderUser = new Object() //singleton object
const tinderUser = {}  //non-singleton 

tinderUser.id = "122fv"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const o1 = {1: "a", 2: "b"}
const o2 = {3: "c", 4: "d"}

//Methods to combine assign
const o3 = {...o1, ...o2}
// console.log(o3)

//to combine to objects
const o4 = Object.assign({}, o1, o2)
// console.log(o4)

//decoding objects
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
//all return array of specified entities(key, value || entry)

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
