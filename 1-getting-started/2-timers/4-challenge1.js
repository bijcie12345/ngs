const theOneFunc = arg => {
    console.log("Hello after " + arg + " seconds")
};

const arg1 = 4;

setTimeout(theOneFunc, arg1 * 1000, arg1);
setTimeout(theOneFunc, arg1 * 2 * 1000, arg1 * 2);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function

//  Start point
// 4 sec |         |  
// 8 sec |                     |
//   sec  1  2  3  4  5  6  7  8 
// program called function with 8 sec argument 4 sec after the function with 4s argument