//console.log(`Allah Akbar`);
//console.log(window);
//console.log(document);
//console.log(global);
//console.log(process);

// const {randomNumber,CelsiustoFahrenheit}=require('./helpers');

// console.log(`Random number is ${randomNumber()}`);
// console.log(`Celsius to Fahrenheit is ${CelsiustoFahrenheit(10)}`);

// If we use type module in package.json then 

import postSize,{getAllposts} from './postModel.js'
console.log(getAllposts())
console.log(`The Size of posts is ${postSize()}`)