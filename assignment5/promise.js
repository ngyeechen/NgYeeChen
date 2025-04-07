//Please remove the /* */ for each question

//Question 1:
// Your code here
/*
const p = Promise.resolve('resolved');
p.then(value => console.log(value));
*/



//Question 2:
// Your code here
// Once a Promise is settled (either resolved or rejected), any further calls to resolve or reject are ignored.
/*
const p = Promise.reject('Oops!');
p.catch(value => console.log(value)); 
*/



//Question 3:
// Your code here
/*
const p = Promise.resolve({ id: 1, name: 'Alice' });
p.then(value => console.log(value));
*/



//Question 4:
// Your code here
/*
const p = Promise.resolve({ id: 1, name: 'Alice' });
p.then(value => console.log(value.name)); 
*/



//Question 5:
// Your code here
/*
const p = Promise.reject(new Error('Invalid id'));
p.catch(value => console.log(value)); 

//how come I don't have to use 'error'? i.e., p.catch(error => console.log(error)); 

*/



//Question 6:
// Your code here
/*
const p = Promise.resolve(42);

p.then(value => {
    console.log("Promise settled");
  }).catch(error => {
    console.log("Caught error:", error); 
  }).finally(() => {
    console.log(" "); //????. seems like I can also don't console.log() anything here.
  });
*/


//Question 7:
// Your code here
/*
const p = Promise.resolve(21);
p.then(value => console.log(value*2)); //using .then for resolve() success.
*/



//Question 8:
// Your code here
/*
const p = Promise.reject(new Error('Invalid value')).catch((error) => 0); 

p.then(error => console.log(error)); //.catch is used for handling errors, so it didn't return 0 when the promise is rejected.
*/



//Question 9:
// Your code here
/*
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
//use Promise.all() to log an array of the resolved values to the console
Promise.all(promises).then((values) => { //can't use Promises[1], Promises[2], Promises[3] here.
    console.log(values); // [1, 2, 3]
  });
*/



//Question 10:
// Your code here
/*
const promises = [
    new Promise(resolve => setTimeout(() => resolve('a'), 100)), 
    new Promise(resolve => setTimeout(() => resolve('b'), 50)),
    new Promise(resolve => setTimeout(() => resolve('c'), 150))
  ];
Promise.race(promises)
  .then(result => console.log(result));
*/



//Bonus Question:
// Your code here
const p = Promise.resolve('World');

function getHelloWorld() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve('Hello '+'World');
        }, 1000);  
    });
}

// Test the function
getHelloWorld().then((value) => {
    console.log(value); 
});