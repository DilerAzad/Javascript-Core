// sort () = method used to sort elements of an array in place.
//           Sorts elements as strings in lexicographic order, not alphabetical
//           lexicographic = (alphabet + numbers + symbols) as strings

let alphabet = ['a','d','c','f','e','b'];

alphabet.sort();
// console.log(alphabet);

let numbers = [1,4,3,2,6,5,8]
numbers.sort((a,b) => a-b);
// console.log(numbers);

const person = [{name:'Diler', age:21, gpa:3.7},
                {name:'Sidhu', age:20, gpa:3.8},
                {name:'Amrit', age:22, gpa:3.9}
                ];

person.sort((a ,b) => b.gpa - a.gpa);
person.sort((a, b) => a.name.localeCompare(b.name)); 

// console.log(person)


//Array Shuffling with Fisher-Yates algorithm

function shuffle(arr){
    for(let i = arr.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i+1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
}

let arr = [1,2,3,4,5,6];
shuffle(arr);
console.log(arr); 