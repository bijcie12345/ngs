// Print "Hello World"
// Every second
// And stop after 5 times

const { exit } = require("process");

// After 5 times. Print "Done" and let Node exit.

let counter = 0;

setInterval(() =>{
    console.log("Hello World");
    counter +=1;

    if (counter == 5){
        console.log("Done");
        exit(1);
    }
}, 1000);