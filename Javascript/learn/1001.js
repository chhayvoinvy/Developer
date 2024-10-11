// // let x = 10;
// var y = 30
// y =20;

// // if (true) {
// //     // let x = 20;
// //     var y = 20
// //     // console.log(`let x is ${x}`); // 20
// //     console.log(`var y is ${y}`); // 20
 
// // } 

// function varY() {
//     var y = 20;
//     console.log(y);
// }

// varY();

// // y = 50;
// // console.log(`let x is ${x}`); // 10 
// console.log(`var y is ${y}`); 

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }




// let totalSum = 0;
// let userInput = 0;

// while (userInput >= 0) {
//     userInput = window.prompt('Enter a positive number or a negative to stop: ')
//     userInput = Number(userInput);
//     if (userInput >= 0) {
//         totalSum += userInput;
//         console.log(totalSum);
//     }  
// }

// console.log(`Total sum is: ${totalSum}`);



// const display = document.getElementById("display");

// function appendtoDisplay(input) {
//     display.value += input ;
//     // console.log(input)
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calCulate() {
//     try {
//         display.value = "Clown 🤡";

//     } catch {
//         display.value = "E.R.R";
//     }
    
// }


// let username;
// let displayName = document.getElementById('displayName');

// // let div = document.getElementById('example');
// // console.log(div.innerText);    
// // console.log(div.textContent);   

// // username = window.prompt('Whats your name?'x );
// // username = document.getElementById('username');
// // displayName = document.getElementById('displayName');

// document.getElementById('submit').onclick = function () {
//     username = document.getElementById('username').value;
//     displayName.textContent = username;
//     displayName.style.color = 'red';
//     // displayName.style.paddingLeft = '10px';
//     // displayName.innerText = `, ${username}`;
//     displayName.innerText = ', ' + username;
// }

// // console.log(username);



// var count = 0;
// var display;

// display = document.getElementById('display');
// display.textContent = count;

// document.getElementById('incre').onclick = function () {
//     count += 1;
//     display.textContent = count;
//     // console.log(increNum);
// }

// document.getElementById('decre').onclick = function () {
//     count -= 1;
//     display.textContent = count;
//     // console.log(increNum);
// }

// document.getElementById('reset').onclick = function () {
//     count = 0;
//     display.textContent = count;
//     // console.log(increNum);
// }



// // Exercise: Find the Largest Number
// // 1.	Initialize an empty array to store the numbers.
// // 2.	Use a while loop to continuously prompt the user for input.
// // 3.	Convert the input to a number and add it to the array if it is valid.
// // 4.	Stop the loop if the user enters an empty string.
// // 5.	After the loop, find and print the largest number from the array.

// let numbers = [];
// let input = window.prompt("Enter a number: "); // Prompt the user initially

// while (input !== '') {
//     let num = Number(input); // Convert the input to a number
    
//     if (!isNaN(num)) {
//         numbers.push(num); // Add to the array if it's a valid number
//     } else {
//         console.log("Invalid input, please enter a number.");
//     }

//     input = window.prompt("Enter a number: "); // Prompt the user again
// }

// if (numbers.length > 0) {
//     let largestNumber = Math.max(...numbers); // Find the largest number
//     console.log(`The largest number is: ${largestNumber}`);
// } else {
//     console.log("No valid numbers were entered.");
// }


// Exercise: Collect User Inputs into an Array
// 1.	Initialize an empty array to store the words.
// 2.	Use a while loop to continuously prompt the user for input.
// 3.	Add each word to the array.
// 4.	Stop the loop if the user enters an empty string.
// 5.	After the loop, print the words in the array separated by commas.

// let input = 0; // 0 is default popup empty return
// let fruits = [];

// while (input !== '') {
//     input = window.prompt("Enter a word: ");
//     input = String(input);

//     if (input !== 0 && input !== '') {

//         fruits.push(input);
//         console.log(fruits);
    
//     }

// }

// console.log(`Words input: ${fruits.join(', ')}`);

// Exercise: Guest the number
// 1.	Generate a random number between 1 and 100 (use Math.floor(Math.random() * 100) + 1).
// 2.	Use a while loop to keep asking the user to guess the number.
// 3.	If the user’s guess is too high, print "Too high!".
// 4.	If the user’s guess is too low, print "Too low!".
// 5.	If the user guesses the correct number, print "Congratulations! You guessed it!" and exit the loop.

// let input = 0;
// let attempt = 10;
// let num = Math.floor(Math.random() * 100 + 1);

// console.log(num);

// while (input !== num && attempt !==0) {
    
//     input = window.prompt('Guess a number between 1 and 100: ');
//     input = Number(input);

//     if (input === num) {
//         console.log('Congratulations! You guessed it!');
//     } else if (input > num) {
//         attempt --;
//         console.log('Too high!');
//     } else if (input < num) {
//         attempt --;
//         console.log('Too low!');
//     } 
// }
// console.log('Try again!');




// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {

//     username = window.prompt(`Enter your username: `);
//     password = window.prompt(`Enter your password: `);

//     if (username === "voin" && password === "123") {
//         loggedIn = true;
//         console.log("You\'ve been logged in!");
//     } else {
//         console.log("Invalid credientials!");
//     }
// }


// for (let i = 1; i <= 30; i++) {
//     // console.log(i);
//     if (i === 2) {
//         continue;
//     } else {
//         console.log(i);
//     }

//     if (i === 2) {
//         break;
//     } else {
//         console.log(i);
//     }
// }


// Function

// function happyBirthday (username, age, thisyear) { // parameters
//     console.log(`Happy Birthday To You!`);
//     console.log(`Birthday ${thisyear}!`);
//     console.log(`Happy Birthday, Dear ${username}!`);
//     console.log(`Now you turned ${age}!`);
// }

// happyBirthday("Voin", 25, 2024); // pass arguement
// happyBirthday("Jeremy", 45, 2025); // pass arguement


// function Cal(x, y, z) {
//     let result = x + y + z;
//     return result;
// }

// let result = Cal(2,3,5);
// console.log(result);


// function isEven(x) {
//     if (x % 2 === 0) {
//         return true;
//     } else {
//         return false
//     }
// }

// let result = isEven(21);
// console.log(result);


// const PI = 3.14;
// let radius;
// let circumference;

// radius = document.getElementById('radius');

// document.getElementById('submit').onclick = function () {
//     radius = Number(radius.value);
//     circumference = 2 * PI * radius;
//     document.getElementById('result').textContent = circumference;
// }




// Temperater converter

const toCiel = document.getElementById("to");