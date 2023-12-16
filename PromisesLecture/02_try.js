const { Console } = require("console");

//Can try and catch an error? Why would we want to do that?
const basicFunction = () => {
    console.log("Good afternoon everyone!")
}

const someHigherOrderFuction = (callback) => {
    callback();

}

// someHigherOrderFuction(basicFunction)
// try {
//     setTimeout(()=> {
//         throw new Error("Something broke, but I don't know what")
//     }, 1000)
// } catch (error) {
//     console.log(error)
// }
// Try and catch is great, but it doesn't work for async code
// setTimeout(() => {
//     try {
//         throw new Error("Something broke, but I don't know what");
//     } catch (error) {
//         console.log(error)
//     }
// }, 1000)

// setTimeout(() => {
//     console.log("After the intial setTimeout")
// }, 1000)

const toaster = (time) => {
    setTimeout(()=> {
        // Its going to generate a random number, if the number is greater than 0.5, then the toaster will break
        // and an error will throw
        if(Math.random() > 0.5){
            throw new Error("Your toaster broke again :( ")
        }
        console.log("🍞🍞🍞")
    }, time)
}

new Promise((resolve, reject)=> {

})

toaster(2000);

