// console.log(2 > 1)
// console.log(2 <= 1)
// console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0) //convet null -> 0
console.log(null == 0) 
console.log(null < 0) //convert null -> 0
console.log(null >= 0) //here > conver null -> 0 hence 0 == 0

//(<, >, >=, <=) coerce nullto 0 except ==
//but == consider null only equal to undefined

//===
console.log(2 == 2, "2"===2)
//here === operator also compares the data-types of both