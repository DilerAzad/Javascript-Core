//Callback Hell = Situation in JavaScript where callbacks
//                are nested within other callbacks to the
//                degree where the code is difficult to read.
//                old pattern to handle asynchronous functions.
//                Use Promises + async/await to avoid Callback Hell


function task1(callback){
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
    
}

function task2(callback){
    setTimeout(() => {
        console.log("Task 2");
        callback();
    }, 3000);
}

function task3(callback){
    setTimeout(() => {
        console.log("Task 3");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() => {
        console.log("Task 4");
        callback();
    }, 3000);
}

function task5(callback){
    setTimeout(() => {
        console.log("Task 5");
        callback();
    }, 3000);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() =>{
                task5(() => {
                    console.log("All tasks are done");
                });
            });
        });
    });
});



