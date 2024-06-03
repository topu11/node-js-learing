const randomNumber=()=>{
    return Math.floor(Math.random()*100)+1
}

const CelsiustoFahrenheit=(celcius=0)=>{
   return (celcius*9)/5+32;
}

module.exports={randomNumber,CelsiustoFahrenheit};