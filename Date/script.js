// //setTimeout() function
function sayHello(){
    alert("Hello");
}
// const timeoutId = setTimeout(sayHello, 2000);

// //clearTimeout() function
// clearTimeout(timeoutId)

let timeOutId;

function startTimer(){
    timeOutId = setTimeout(() => window.alert("hello!"), 2000);
    console.log("Started");
}

function stopTimer(){
    clearTimeout(timeOutId);
    console.log("Closed")
}

setInterval(sayHello, 1000)

