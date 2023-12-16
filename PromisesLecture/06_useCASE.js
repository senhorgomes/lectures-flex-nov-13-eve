const getUser = (cb) => {
	console.log("Getting the user, 2 seconds...");
    return new Promise((resolve, reject)=> {
        if(true){
            setTimeout(() => 
                resolve({
                    name: "Bob Squarepants",
                    email: "bob@squarepants.com",
                })
            , 2000);
        }else{
            reject(Error("Cannot get user object!"));
        }
    })
};

const upperCaseAsync = (inputStr, cb) => {
	console.log("async, taking 2 seconds...");
    return new Promise((resolve, reject)=> {
        if(true){
            setTimeout(() => {
                resolve(inputStr.toUpperCase());
            }, 3000);

        } else {
            reject(Error("Cannot say hello"));
        }
    })
};

const sayHello = () => {
	// getUser((err, user) => {
	// 	console.log(user);
	// 	if (err) {
	// 		console.log("Error getting the user!");
	// 		return;
	// 	}
    //     // Bob Squarepants
	// 	upperCaseAsync(`Hello ${user.name}`, (err, str) => {
	// 		if (err) {
	// 			console.log("Error, cannot print hello message!");
	// 			return;
	// 		}
	// 		console.log(str);
	// 	});
	// });
	getUser()
    .then((user)=> {
        console.log(user)
        return upperCaseAsync(`Hello ${user.name}`)
    })
    .then((helloString)=> console.log(helloString))
    .catch((error)=> {
        console.log(error)
    })
	
};

sayHello();