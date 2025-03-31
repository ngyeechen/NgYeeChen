const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
//average closing price
let avgohlc = 0;
let closesum = 0;
for (let i = 0; i < msftData.length; i++) {
	
		closesum += msftData[i][3]; // 3rd index is the closing price //row first then col
	}
	avgohlc = (closesum / msftData.length).toFixed(2);

console.log(`Average closing price of MSFT is: ${avgohlc}`);
