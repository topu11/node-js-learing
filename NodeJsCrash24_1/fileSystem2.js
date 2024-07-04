import { error } from 'console';
import fs from 'fs'

// fs.readFile('./namess.txt','utf8',(err,data)=>{
//    if(data)
//     {
//         console.log(data);
//     }else
//     {
//         console.log(err)
//     }
// });

fs.readFile('./name.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})
console.log("Print second ");
 const data=fs.readFileSync('./name1.txt','utf8');
 console.log(data);
console.log("Print First ");