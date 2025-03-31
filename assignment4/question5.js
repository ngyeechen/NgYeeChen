const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
//row first then col
//average closing price

let avgohlc = 0;
let closesum = 0;
for (let i = 0; i < disneyData.length; i++) {
	//closesum += disneyData[i][3]; // not array, so this didn't work. 
	closesum += Math.round(parseFloat(disneyData[i].close)*1000)/1000; //round to 3 decimal places
}
avgohlc = Math.round((closesum / disneyData.length)*100)/100; //round to 2 decimal places, because fixed(2) returned .00 instead of 01

console.log(`Average closing price of Disney is ${avgohlc}`); //Nan means not a number, convert to number first