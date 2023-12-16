//fs? Filesystem?
//A node module that allows us to interact with the file system
const fs = require("fs");
//Read all three text files, and add them up
//How can I add these files together?
//run three readfiles? and add a console.log at the end?
//Can we add some sort of delay to the console.log? Maybe a setTimeout?
let totalNumber = 0
// fs.readFile("./data1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     //This file number is 10
//     totalNumber += Number(data);
//     // console.log(totalNumber);
//     //Execute another fs.readFile
//   }
// });
// fs.readFile("./data2.txt", "utf8", (err1, data1) => {
//   if (err1) {
//     console.log(err1);
//   } else {
//     //This file number is 20
//     totalNumber += Number(data1);
//     // console.log(totalNumber);
//   }
// });

// fs.readFile("./data3.txt", "utf8", (err2, data2) => {
//   if (err2) {
//     console.log(err2);
//   } else {
//     //This file number is 30
//     totalNumber += Number(data2);
//     console.log(totalNumber);
//   }
// });

const readFileAsSync = (filePath) => {
  return new Promise((resolve, reject)=> {
    fs.readFile(filePath, "utf8", (err2, data2) => {
      if (err2) {
        reject(err2);
      } else {
        resolve(Number(data2));
      }
    });
  })
}

// readFileAsSync("./data1.txt")
// // .then((data1) => totalNumber += data1)
// .then((data1)=> { 
//   totalNumber += data1;
//   return readFileAsSync("./data2.txt")
// })
// .then((data2)=>{
//   totalNumber += data2
//   return readFileAsSync("./data3.txt");
// })
// // .then(()=> readFileAsSync("./data3.txt"))
// .then((data3) => {
//   totalNumber+=data3
//   console.log(totalNumber)
// })
// .then(()=> console.log(totalNumber))


Promise.all([readFileAsSync("./data1.txt"), readFileAsSync("./data2.txt"), readFileAsSync("./data3.txt"),readFileAsSync("./data3.txt"),readFileAsSync("./data3.txt"),readFileAsSync("./data3.txt")])
// [10,20,30,30,30]
.then((arrayOfNumbers)=> {
  arrayOfNumbers.forEach((number)=> {
    totalNumber += number;
  })
  console.log(totalNumber)
})
.catch((error)=> {
  console.log(error)
})

