// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

let lowestamdprice = []; //I want to make this an array and then sort it

const sortitpleaseASC = () => {
    for (let i = 0; i < amdPrices.length; i++) {
        lowestamdprice.push(amdPrices[i]); //pushes the values into the array
    }
    lowestamdprice.sort((a, b) => a - b); //sort() will sort alphabetically, so we need to use a compare function
}

sortitpleaseASC(); //call the function


console.log(`The three lowest prices are ${lowestamdprice[0]}, ${lowestamdprice[1]} and ${lowestamdprice[2]}`);