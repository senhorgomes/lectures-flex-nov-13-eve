//All the promises?

const toasterPromise = (time) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            // Its going to generate a random number, if the number is greater than 0.5, then the toaster will break
            // and an error will throw
            // if(Math.random() > 0.5){
            if(time === 1000){
                reject(new Error("Your toaster broke again :( "))
            }
            resolve("🍞🍞🍞")
        }, time)
    })
}

Promise.all([toasterPromise(2000), toasterPromise(1000), toasterPromise(500)])
// Once all promises have been resolved, then it will return a value
.then((messages)=> messages.forEach((message)=> console.log(message)))
.catch((error)=> console.log(error))
// toasterPromise(2000)
// .then((message)=> {
//     console.log(message);
//     return toasterPromise(1000)
// })
// .then((message)=> {
//     console.log(message);
//     return toasterPromise(1000)
// })
// .then((message1)=> {
//     console.log(message1);
//     // return toasterPromise(1000)
// })
// .catch((error)=> console.log(error))