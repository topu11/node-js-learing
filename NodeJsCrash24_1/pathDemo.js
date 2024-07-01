import path from 'path'

const filePath ='./dir1/dir2/text.txt';

console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));