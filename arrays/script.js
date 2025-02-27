array = ["apple","banana","coconuts"];

//array[0] = "orange";
// array.push("lichi");
// f = array.pop()
//array.unshift("mango");
//array.shift();

//console.log(array);
//console.log(f);

//let len = array.length;
//let i = array.indexOf("mango");

//console.log(i);

// for(let i = 0; i<array.length; i++){
//     console.log(array[i]);
// }

// for(let i = array.length-1; i>=0; i--){
//     console.log(array[i]);
// }

// array.sort();
// array.reverse();

// for(let fruit of array){
//     console.log(fruit);
// }

// arr = [1,2,3,4,5];

// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log(max);
// console.log(min);

// rest

// function getFood(...food){
//     return food;
// }

// let food1 = "apple";
// let food2 = "orange";
// let food3 = "banana";
// let food4 = "coconut";
// let food5 = "lichi";

// let food = getFood(food1, food2, food3, food4, food5);
// console.log(food);

function sum(...nums){
    let total = 0;
    for(let num of nums){
        total += num;
    }

    return total;
}

function average(...nums){
    let avg = sum(...nums)/nums.length;
    return avg;
}

function combineStrings(...str){
    return str.join(" ");
}

let fullname = combineStrings("Mr","Diler","Singh");
console.log(fullname);
