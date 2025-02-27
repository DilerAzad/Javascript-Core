//Promise = An Object that manages asynchronous operations.
//          Wrap a Promise Object around {asynchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH


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

// walkTheDog(() => {
//     cleanTheKitchen(() => {
//         takeOutTheTrash(() => {
//             console.log("All chores are done!");
//         });
//     });
// });

walkTheDog().then((value) => {console.log(value); return cleanTheKitchen();})
            .then((value) => {console.log(value); return takeOutTheTrash();})
            .then((value) => {console.log(value); console.log("All chores are done!");})
            .catch((error) => {console.error(error);});

