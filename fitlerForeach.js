const coding = ["js", "ruby", "java", "python", "cpp"]

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//filter
// const num1 = nums.filter((num)=> num > 4)
// console.log(num1)

//using foreach
// const num2 = []
// nums.forEach((num)=>{
//     if(num >= 4) {
//         num2.push(num)
//     }
// })
// console.log(num2)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const bookByGenre = (genre) => {
    return books.filter((bk)=>{
        return bk.genre === genre
    })
}

const bookByPublishDate = (publishDate) => {
    return books.filter((bk)=>{
        return bk.publish >= publishDate
    })
}

const bookByPublishDateAndGenre = (publishDate, genre) => {
    return books.filter((bk)=>{
        return bk.publish >= publishDate && bk.genre === genre
    })
}

// console.log(bookByGenre("History"))
// console.log(bookByPublishDate(1995))
console.log(bookByPublishDateAndGenre(1995, "Science"))