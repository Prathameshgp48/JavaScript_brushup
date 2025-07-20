// A Promise is an object representing the 
// eventual completion or failure of an asynchronous operation.


//  Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task done")
        resolve() //promise settled or fulfillled
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise two")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "patty345", loggedIn: new Date().getTime() })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "patty34", password: "2342" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user)
    return user.username //thenable 
}).then(function (username) {
    console.log(username) //non-thenable
}).catch(function (err) {
    console.log(err)
}).finally(function () {
    console.log("Promise either resolved or rejected")
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "2342" })
        } else {
            reject("Error: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}
consumePromiseFive()

// async function getAllUser() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (err) {
//         console.log("E", err)
//     }
// }
// getAllUser()


// The fetch() method of the Window interface starts 
// the process of fetching a resource from the network, 
// returning a promise that is fulfilled once the response is available.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log('Error calling fetch', err)
    })

// A fetch() promise only rejects when the request fails,
// for example, because of a badly - formed request URL or a network error.
// A fetch() promise does not reject if the server responds with HTTP status codes 
// that indicate errors(404, 504, etc.).
// Instead, a then() handler 
// must check the Response.ok and / or Response.status properties.