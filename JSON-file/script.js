// JSON = (JavaScript Object Notation) data-interchange format
//         Used for exchanging data between a server and a web application
//         JSON files {key:value} OR [valuel, value2, value3]

//         JSON. stringify() = converts a JS object to a JSON string.
//         JSON. parse() = converts a JSON string to a JS object


//********** STARTS **********


const names = ["Diler","Amrit","Sidhu","Vivek","Vraj","Sahil","Anirudh"];
// console.log(names);

const JSONstring = JSON.stringify(names);
// console.log(JSONstring);

const JSONobject = JSON.parse(JSONstring);
// console.log(JSONobject);

fetch("people.json").then(response => response.json())
                    .then(values => values.forEach(value => console.log(value.name)))
                    .catch(error => console.log(error));



