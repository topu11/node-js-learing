const input_string="I love    Bangladesh";
let size_of_input_str=input_string.length;
let reverse_string=reverseString(input_string);
let j =size_of_input_str-1;
let i=0;
let space_positions=[0];
// while(j >= 0)
// {
//     reverse_string=reverse_string+input_string[j--];
// }

j=reverse_string.length-1;
for(let i=0;i<j;i++)
{
  if(reverse_string[i] == " ")
    {
        space_positions.push(i);
    }
}
let final='';
space_positions.forEach((element,index) => {
     
        final+=reverseString(reverse_string.substring(element, space_positions[index+1]));
        
    
});
//reverse_string[0]="1";
//console.log(space_positions);
console.log(input_string);
console.log(final);

function reverseString(str) {
    const strRev =  str.split('').reverse().join('');
    return strRev;
    //console.log(strRev);
}