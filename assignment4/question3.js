const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
//find the average price over a period of 7 days (90.97) and 
let SMAanswer = 0;
let sumall = 0;
let SMAcount = 0;

for (let i = 0; i<amdPrices.length; i++) {
    sumall += amdPrices[i];
    
}
SMAanswer = (sumall/amdPrices.length).toFixed(2);

// count the number of days in which the price was above the 7 day simple moving average
for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] > SMAanswer) {
        SMAcount++; //adds 1 to the count each i
    }
}
console.log(`Number of days AMD was above the 7-day SMA is: ${SMAcount}`); 