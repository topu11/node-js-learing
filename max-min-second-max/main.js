let numbers = [1000, -8, 10, 15, 100, 58, 65];
let max=Number.MIN_SAFE_INTEGER;
let min=Number.MAX_SAFE_INTEGER;
let secondMax;

for(let i=0;i<numbers.length;i++){
    if(numbers[i]>max){
        secondMax=max;
        max=numbers[i];
    }
    if(numbers[i]<min){
        min=numbers[i];
    }
    if(numbers[i]>secondMax && numbers[i]<max){
        secondMax=numbers[i];
    }
}
console.log(max);
console.log(min);
console.log(secondMax);