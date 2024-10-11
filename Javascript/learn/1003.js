
// Exercise: Create a Multiplication Table

// Write a program that generates a multiplication table for a number provided by the user.

// 	•	Ask the user to input a number between 1 and 10.
// 	•	Use a loop to print out the multiplication table for that number from 1 to 10.
// 	•	Display the result in the format: "3 x 1 = 3", "3 x 2 = 6", etc.

let userInput = 0;
let mul = 0;
let result;

userInput = window.prompt('Input a number between 1-10: ');
userInput = Number(userInput);

if (userInput <=10 && userInput !== '' && !isNaN(userInput)) {
while (mul < 10) {
        mul += 1;
        result = userInput * mul;
        console.log(`${userInput} x ${mul} = ${result}`);
    }
}

// console.log(`${userInput} x ${num} = ${result}`);
