// Define a function that takes a callback
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

// Define a callback function
function sayGoodbye() {
    console.log('Goodbye!');
}

// Call the greet function with the callback
greet('Alice', sayGoodbye);

