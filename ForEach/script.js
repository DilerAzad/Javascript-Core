/* forEach() = method used to iterate over the elements
            of an array and apply a specified function (callback)
            to each element

            array. forEach(callback)
            element, index, array are provided */


let arr = [1,2,3,4,5,6];

// arr.forEach(double);
// arr.forEach(print);

function double(element, index, array){
    array[index] = element*2;
}

function print(element){
    console.log(`${element}`);
}


// •map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

const arr2 = [1,2,3,4,5,6];
const arr3 = arr2.map(square);

function square(element){
    return Math.pow(element, 2);
}
// filter() = accepts a callback and returns a new array

function isEven(element){
    return element % 2 === 0;
}

const arr4 = arr2.filter(isEven);
// console.log(arr4);

// reduce() = accepts a callback and returns a single value

const grades = [32,56,24,5,23,78,21,34,89,21,34];

function mul(accumilator, element){
    return accumilator * element;
}
function max(accumilator, element){
    return Math.max(accumilator, element);
}

const total = arr2.reduce(mul, 1);
const m = grades.reduce(max)
//console.log(m);

//function expresion = 
const f = arr2.filter(function(element){
    return element % 2 === 0;
})

//console.log(f);

// arrow function = a concise way to write function expressions
//   good for simple functions that you use only once
//   (parameters) => some code

const hello = (x,y) => {console.log(`${x}`);
                        console.log(`${y}`)};

const multiplication = arr2.reduce((arguments, elements) => arguments * elements);
const square2 = arr2.map((elements) => Math.pow(elements, 2));
console.log(square2);