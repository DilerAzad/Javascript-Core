import {getCircumference, getArea, getVolume, getDiameter} from './mathUTIL.js';

const radius = 9; 

const area = getArea(radius);
const volume = getVolume(radius);
const circumference = getCircumference(radius);

console.log(`Radius is ${radius}`);
console.log(`Area is ${area}`);
console.log(`Volume is ${volume}`);
console.log(`Circumference is ${circumference}`);
console.log(`Diameter is ${getDiameter(radius)}`);