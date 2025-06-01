const marvels = ["Ironman", "Spiderman", "Hulk"]
const dcs = ["Superman", "Batman", "Robin"]

// marvels.push(dcs)
// console.log(marvels)

//CORRECT METHODS TO MERGE ARRAYS
// const new_heroes = marvels.concat(dcs)
// console.log(new_heroes)

// const all_heroes = [...marvels, ...dcs]
// console.log(all_heroes)

//ANOTHER METHODS
// const another_arr = [2, 5, [4, 9, 1], 6, [2, 3, [4, 7]]]
// //flat flatten nD array to 1D arr according to depth mentioned
// const real_arr = another_arr.flat(Infinity)
// console.log(real_arr)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "APt"}))
//it will return [] as we havent specified what(key or value) to consider to make arr

const s1 = 100
const s2 = 422
const s3 = 324
console.log(Array.of(s1, s2, s3))
