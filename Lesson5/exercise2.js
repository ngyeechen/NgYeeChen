function fetchData() {
    // Write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve('Data retrieved'); // Resolve the promise with the value 10 after 2 seconds
            }, 1000);  
        })
}

function processData(data){
    // Write your code here
    //append something to given input
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const formattedstr = data + " and processed"; // Resolve the promise with the value 10 after 2 seconds
            resolve(formattedstr); 
        }, 2000);  
    })
}

function displayData(data) {
    // Write your code here
    //log 
    console.log(data); 
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));