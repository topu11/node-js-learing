const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1
}

const celciustoFarenhite = (celcius) => {
       return (celcius*9) / 5 + 32;
} 


module.exports = { generateRandomNumber,celciustoFarenhite }
