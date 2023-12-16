//What are callbacks?
// Passing a function into an arguement
// What do we call a function that has a function as an arguement
// Higher Order Functions

const basicFunction =  () => {
  console.log("Good afternoon everyone!")
  // API call
  // Grab information from a server
  // List of all the Star Wars movies
  throw new Error("Something broke, but I don't know what")
}

const someHigherOrderFuction = (callback) => {
  callback();
  // basicFunction()
}

someHigherOrderFuction(basicFunction)

