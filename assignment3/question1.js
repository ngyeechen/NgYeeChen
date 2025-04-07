

const msftData = [190.15, 194.21, 191.07, 190.44, 200.15]
//can't change const/ can't declare again

// 1: average price of MSFT over a period of 5 days 
let sum = 0; //create one variable to store the sum of the stock prices first
for (let i = 0; i < msftData.length; i++) {
    sum += msftData[i];
}

let avg = sum / msftData.length;
console.log(avg);

// 2: add in the 205.67 missing data
msftData.push(205.67)
console.log(msftData);

//
const disneyData = {
	open: "120.54", // " " that's a string
	high: "122.56",
	low: "120.54",
	close: "121.09"
}

// 3: print out the result of the calculation based on the formula open - high + low - close
    // parsefloat vs parseint = decimal vs whole number
const ResultOfFormula =
parseFloat(disneyData.open) - parseFloat(disneyData.high) + parseFloat(disneyData.low) - parseFloat(disneyData.close);
console.log(ResultOfFormula);

    //use .toFixed() to change the decimal point of a number
const roundResultOfFormula = ResultOfFormula.toFixed(1);
console.log(roundResultOfFormula);

// 4: add in the volume: 1512311 missing key-value pair
disneyData.volume = "1512311"; //added " " so displayed str
console.log(disneyData);

//
const bacData = [190.15, 194.21, 191.07, 192.44, 129000]

//5: index-based : It's not reassignment of the array, but modification of the array
bacData[0] = 190.15;  // Low
bacData[1] = 194.21;  // High
bacData[2] = 191.07;  // Open
bacData[3] = 192.44;  // Close
bacData[4] = 129000;   // Volume
//if I use bacData[0] = "Low" it will change the value of the array to str so IF ELSE will fail

//print pricing trend of the given data
if (bacData[3] > bacData[2]) { //192.44 > 191.07
    if (bacData[4] > 100000) { //129000 > 100000
        console.log("Strong Bullish");
    } else {
        console.log("Bullish");
    }

} else if (bacData[3] < bacData[2]) {
    if (bacData[4] > 10000) {
        console.log("Strong Bearish");
    } else {
        console.log("Bearish");
    }

} else {
    console.log("Neutral");
}

//6:print pricing trend of the given data
console.log(disneyData); //correct

const open = parseFloat(disneyData.open);
const close = parseFloat(disneyData.close);
const volume = parseFloat(disneyData.volume);

console.log('Open:', open);  // Should print 120.54
console.log('Close:', close); // Should print 121.09
console.log('Volume:', volume); // Should print 90000

if (close > open) {
    if (volume > 100000) { //90000 > 100000
        console.log("Strong Bullish");
    } else {
        console.log("Bullish");
    }
} else if (close < open) {
    if (volume > 10000) {
        console.log("Strong Bearish");
    } else {
        console.log("Bearish");
    }
} else {
    console.log("Neutral");
}