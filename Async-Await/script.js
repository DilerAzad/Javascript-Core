// Async /Awairt = Async = makes a function return a promise
//                 Await = makes an async function wait for a promise
//                 Allows you write asynchronous code in a synchronous manner
//                 Async doesn't have resolve or reject parameters
//                 Everything after Await is placed in an event queue

function walkTheDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didWalkTheDog = true;
            if (didWalkTheDog) {
                resolve("You walk the dog. ");
                }
             else {
                reject("You did not walk the dog. ");
            }
        },2000);
    });
}

function cleanTheKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didCleanTheKitchen = true;
            if (didCleanTheKitchen) {
                resolve("You clean the kitchen. ");
            }
            else {
                reject("You did not clean the kitchen. ");
            }
        },1000);
    });
}

function takeOutTheTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didTakeOutTheTrash = true;
            if (didTakeOutTheTrash) {
                resolve("You take out the trash. ");
            }
            else {
                reject("You did not take out the trash. ");
            }
        },500);
    });
}

async function doChore(){
    try{
        const walkTheDogResult = await walkTheDog();
        console.log(walkTheDogResult);

        const cleanTheKitchenResult = await cleanTheKitchen();
        console.log(cleanTheKitchenResult);
        
        const takeOutTheTrashResult = await takeOutTheTrash();
        console.log(takeOutTheTrashResult);
    }
    catch(error){
        console.log(error);
    }
}

doChore();