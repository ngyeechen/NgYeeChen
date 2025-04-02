
fetch("https://www.alphavantage.co/query?" +
    "function=EARNINGS&symbol=MSFT&apikey=43IFORBTYULDSLUR")
.then((resolvedValue) => {
    return resolvedValue.json()
})
.then((data) => {
    console.log(data)
    // {
    //     "annualEarnings": [],
    //     "quarterlyEarnings": [],
    //     "symbol": ""
    // }
    const earnings = data["annualEarnings"]
    for(let i = 0; i < earnings.length; i++) {
        // {
        //     "fiscalDateEnding": "2025-03-31",
        //     "reportedEPS": "6.53"
        // }
        const currentEarning = earnings[i]
        if(currentEarning["fiscalDateEnding"].includes("2020")) {
            console.log(currentEarning["reportedEPS"])
            return
        }
    }
})