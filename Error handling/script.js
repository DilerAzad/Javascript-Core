// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

try{
    const num1 = Number(window.prompt("Enter first Number:"));
    const num2 = Number(window.prompt("Enter second Number:"));

    if(num2 == 0){
        throw new Error("Cannot divide by zero");
    }
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Invalid input");
    }

    const result = num1/num2;

    console.log(`The result is: ${result}`);
}

catch(error){
    console.error(error);
}
finally{
    console.log("This code will always run");
}


console.log("You have reached the end!")