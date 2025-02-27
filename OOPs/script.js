person1 = {
    firstName: "Diler",
    lastName: "Singh",
    age: 25,

    sayHello: () => {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
    }
}

person2 = {
    firstName: "Adarsh",
    lastName: "Singh",
    age: 26,

    sayHello: function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} Chutiya`)
    }
}

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayPrice(){
        console.log(`The price of ${this.name} is ${this.price}`)
    }
}

const product = new Product("Apple", 100);

class Mul{
    static PI = 3.14;

    static getDiameter(radius){
        return 2 * radius;
    }
}

//Destructuring = extract values from arrays and objects,
//      then assign them to variables in a convenient way
//      [] = to perform array destructuring
//      {} = to perform object destructuring

const arr = [1,2,3,4,5,6,7,8];
const colors = ["orange","red","blue","green","violet","greay"];

[arr[0], arr[1]] = [2, 4];

const [first, second, third, ...all] = colors;

// console.log(first);
// console.log(second);
// console.log(all)

const p1 = {
    name: "John",
    age: 25,
    job: "Developer"
}

const p2= {
    name: "Jane",
    age: 30,
}

const {name , age, job = "untiteled"} = p1;

// console.log(name);
// console.log(age);
// console.log(job);

function displayPerson({name, age, job = "untiteled"}){
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
}

// displayPerson(p2)

