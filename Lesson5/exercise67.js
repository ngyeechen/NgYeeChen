//web api fetch
// fetch("https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=W477GJ0BF0MKCFZU")
fetch("https://www.alphavantage.co/query?"+
    "function=EARNINGS&symbol=MSFT&apikey=43IFORBTYULDSLUR")
.then((resolvedValue) => {
    return resolvedValue.json()
})

.then((data) => {
    console.log(data)

    //earnings is an array of objects
    //extract only the EPS for the year 2020

    const earnings = data["annualEarnings"]; //Array(30)
    for (let i = 0; i < earnings.length; i++) {

        const currentEarnings = earnings[i]

        if(currentEarnings["fiscalDateEnding"].includes("2020")) {
            console.log(currentEarnings["reportedEPS"]);
            return
        }
    }
})
    // .catch((error) => {
    //     console.error("Error fetching data:", error);
    // });