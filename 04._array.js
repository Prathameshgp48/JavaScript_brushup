//Array
const myArr = [0, 1, 2, 3, 4, 5]
//shallow copy: object copy properties share the same reference of original one
//deep copy: properties do not share the same references

// console.log(myArr[5])

//another definition
const myArr2 = new Array(1, 3, 4, 5)

//array methods
myArr.push(6)
// myArr.push("2343")
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)

//questionier methods (true/false)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))  //-1 in case of unavailable value

const newArr = myArr.join()
//join converts all arr into string
console.log(newArr, typeof newArr)

//SLICE AND SPLICE
console.log("A ", myArr)

//slice take two input start(optional) index and end index(optional and exclusive) for slicing
const myn1 = myArr.slice(1, 3)
const myn3 = myArr.slice(1)
// const myn6 = myArr.slice()
//all operations on copy of original array
//if start index not specified then slice consider 0 as start
console.log(myn1)
console.log(myn3)
console.log("B ", myArr)

// splice take two inputs: start index from where the elements be removed
// second(optional and exclusive) is how many elements to remove
const myn2 = myArr.splice(1, 3)//return deleted elements
// const myn2 = myArr.splice(1) // remove all elements with and after specified start index
console.log(myn2)
console.log("c ", myArr)