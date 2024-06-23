//import fs from 'fs';
import { readFile } from 'fs';
import fs from 'fs/promises'

// fs.readFile('./name.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// const data=fs.readFileSync('./name.txt','utf8');
// console.log(data);


fs.readFile('./namae.txt','utf8').then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
});

const  readingFile=async ()=>{
    try
    {
        const data=await fs.readFile('./name.txt','utf8')
        console.log(data);
    }catch(error)
    {
        console.log(error);
    }
}

readingFile()
console.log("Ada");


const writeFile = async ()=>{
    try
    {
        await fs.writeFile('./text.txt',"Data into file 123");
        console.log("Data written to file")
    }catch(error)
    {
        console.log(error);
    }
}
const AppendFile = async ()=>{
    try
    {
        await fs.appendFile('./text.txt',"\n New data আল্লাহ আকবর")
        console.log("Data written to file")
    }catch(error)
    {
        console.log(error);
    }
}

writeFile();
AppendFile();