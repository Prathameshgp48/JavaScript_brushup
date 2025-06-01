const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map(num => num+10)
// console.log(newNums)

// console.log(newNums)

//chaining of methods
// const newNums = myNums.map(num => num*10).map(num => num+1).filter(num => num >= 41)
// console.log(newNums)

//Reduce method
// const myTotal = myNums.filter((_, index) => index <= 3).reduce((acc, curr) =>{
//     console.log(`acc:${acc}, curr: ${curr}`)
//     return acc+curr;
// }, 0)

// console.log(myTotal)

const shoppingCart = [
  { name: "Apple", price: 50, quantity: 4 },
  { name: "Bread", price: 30, quantity: 1 },
  { name: "Milk", price: 40, quantity: 2 },
  { name: "Eggs", price: 60, quantity: 1 }
];

const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(totalPrice)

