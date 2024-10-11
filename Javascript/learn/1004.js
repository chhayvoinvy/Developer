// Exercise: Sum of Even Numbers

// Write a program that calculates the sum of all even numbers between 1 and a number provided by the user.

// 	•	Ask the user to input a positive number greater than 1.
// 	•	Calculate and display the sum of all even numbers from 1 to the provided number.
// 	•	For example, if the user inputs 10, the sum should be 2 + 4 + 6 + 8 + 10 = 30.

// The sum of all even numbers between 1 and 10 is: 30

// let userInput;
// let posArr = [];
// let sum = 0;

// // Prompt the user to input a number
// userInput = window.prompt('Input a number from 1 to 10: ');
// userInput = Number(userInput);

// // Check if the input is a valid number between 1 and 10
// if (userInput >= 1 && userInput <= 10) {
//     // Push even numbers to posArr
//     for (let i = 1; i <= userInput; i++) {
//         if (i % 2 === 0) {
//             posArr.push(i);
//         }
//     }

//     // Calculate the sum of numbers in posArr
//     for (let num of posArr) {
//         sum += num;
//     }

//     console.log(`The even numbers are: ${posArr.join(', ')}`);
//     console.log(`The sum of all even numbers is: ${sum}`);
// } else {
//     console.log('Please input a valid number between 1 and 10.');
// }