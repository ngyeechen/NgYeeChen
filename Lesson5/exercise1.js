function getNumberPromise() {
    // Write your code here
    //const myPromise = new Promise((resolve, reject) => { //can dont use const here. use return directly
    return myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve(10); // Resolve the promise with the value 10 after 2 seconds
        }, 2000);  
    })
    return myPromise; // Return the promise
}
// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});