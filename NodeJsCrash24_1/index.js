//console.log(global)
//console.log(window);  /* working only browers */
//console.log(document); /*working only browers */
//console.log(process);

//const {generateRandomNumber,celciustoFarenhite}=require('./util');

import {addNumber,multiPlyNumber} from './esSixUtil.js';
import {getPost,getPostLength} from './postController.js';

//console.log("The Random nubmber is "+generateRandomNumber());
//console.log("The Farenhite of celcius is "+celciustoFarenhite(10));

console.log("The addtion value of  "+addNumber(10,15));
console.log("The multiPlyNumber value of  "+multiPlyNumber(10,15));
console.log(`The post object is  `);
console.log(getPost());
console.log(`The post length is ${getPostLength()}`)