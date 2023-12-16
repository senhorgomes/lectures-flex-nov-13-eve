//Whats a promise?
// Assurance to get an item, or something else

// Promises have three states


// Pending
// Bryan made a promise to the whole class I'll buy everyone a cookie
// Fufilled -> resolved
// Everyone gets the cookie
// Or
// Broken -> rejected
// Bryan is a liar, and didn't get everyone cookies >:(

const toaster = (time) => {
    setTimeout(()=> {
        // Its going to generate a random number, if the number is greater than 0.5, then the toaster will break
        // and an error will throw
        if(Math.random() > 0.9){
            throw new Error("Your toaster broke again :( ")
        }
        console.log("🍞🍞🍞")
    }, time)
}
const toasterPromise = (time) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            // Its going to generate a random number, if the number is greater than 0.5, then the toaster will break
            // and an error will throw
            if(Math.random() > 1.1){
                reject(new Error("Your toaster broke again :( "))
            }
            resolve("🍞🍞🍞")
        }, time)
    })
}
toasterPromise(2000)
.then((message)=> {
    console.log(message);
    return toasterPromise(1000)
})
.then((message1)=> {
    console.log(message1);
    // return toasterPromise(1000)
})
.catch((error)=> console.log(error))

// new Promise((resolve, reject)=> {
//     resolve();
//     reject();
// })

// try {
//     toaster(2000)
// } catch(error) {
//     console.log(error)
// }
