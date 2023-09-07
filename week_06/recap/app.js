// scope
function greet(name) {
    // this is a local variable that is scoped to this function
    var message = `Hello, ${name}`;
    console.log(message);
}

// we can't see the message variable out here
// it's scoped to the greet function

greet('Jarrod');

function greet(name) {
    // let/const are block scoped
    // if this variable was created inside of the if/else blocks
    // the console.log() wouldn't be able to see it
    let message;
    if (name === 'Jarrod') {
        message = `Hello, ${name}! That's a nice name`;
    } else {
        message = `Hello, ${name}!`;
    }
    console.log(message);
}

// loops & iterator methods

// old school for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// more modern/readable for loop
for (const number of numbers) {
    console.log(number);
}

// iterator methods
const numbers = [1, 2, 3, 4, 5];

// 3 important pieces of information:
// - what parameters should my callback have?
// - what value should i return from my callback
// - what will the function return to me?

// forEach
// parameters - each element, its index and the array that you're iterating through
// callback return value - nothing
// forEach return value - nothing
numbers.forEach(function (number, index, array) {
    console.log({ number });
    console.log({ index });
    console.log({ array });
});

// filter
// parameters - each element, its index and the array that you're iterating through
// callback return value - a boolean (do you want to keep the element or not?)
// filter return value - an array containing only the elements for which the callback returned true
const evenNumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

// can also be written as...
const evens = numbers.filter(num => num % 2 === 0);
console.log({ evens });
