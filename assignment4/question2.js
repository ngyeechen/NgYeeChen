const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]; //last 7 days

// Write your code below
// average price over a period of 7 days SMA
let SMAanswer = 0;
let sumall = 0;

for (let i = 0; i<amdPrices.length; i++) {
    sumall += amdPrices[i];
}
SMAanswer = (sumall/amdPrices.length).toFixed(2);

console.log(`The 7-day SMA of AMD is ${SMAanswer}`); 