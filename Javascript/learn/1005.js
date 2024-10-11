// Instructions:

// 	1.	Create a function that accepts two parameters: width and height.
// 	2.	Inside the function, calculate the area using the formula area = width * height.
// 	3.	Return the calculated area.
// 	4.	Call the function with values and log the result.


// function calculateArea (width, height) {
//     return total = width * height;
// }

// let result = calculateArea(10, 20);
// console.log(result);


// Create a program that:

// 	1.	Initializes an empty array named numbers.
// 	2.	Uses a while loop to prompt the user to enter numbers until they enter a negative number.
// 	3.	Each time a valid number is entered, push it into the numbers array.
// 	4.	After the loop, use forEach() to print all the numbers in the array.

// let numbers = [];
// let inputs = 0;

// while (true) {
//     inputs = window.prompt("Enter any numbers (enter a negative number to stop): ");
//     inputs = Number(inputs);

//     if (inputs >= 0) {  // Check if the number is non-negative
//         numbers.push(inputs);
//     } else {
//         console.log("Input was negative. Ending input.");
//         break;  // Exit the loop if a negative number is entered
//     }
// }

// // Use forEach to log all the numbers
// numbers.forEach(number => {
//     console.log(`Number: ${number}`);
// });

// console.log("Program comes to an end.");


// Array

// const matrix = [[1, 2, 3], [4, 5, 6], [7,8,9]];

// matrix[0][0] = 'x';
// matrix[0][1] = 'o';
// matrix[0][2] = 'x';

// matrix[1][0] = 'o';
// matrix[1][1] = 'x';
// matrix[1][2] = 'o';

// matrix[2][0] = 'x';
// matrix[2][1] = 'o';
// matrix[2][2] = 'x';

// for(let row of matrix) {
//     const rString = row.join(' ');
//     console.log(rString);
// }








// Password Generator

// function pwGenerator(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
//     const lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numbers = '1234567890';
//     const symbols = '_!@#$%^&*()-+./';

//     let allowChars = '';
//     let password = '';

//     allowChars += includeLowercase ? lowercase : '';
//     allowChars += includeUppercase ? uppercase : '';
//     allowChars += includeNumbers ? numbers : '';
//     allowChars += includeSymbols ? symbols : '';
    
//     if (length < 8 ) {
//         console.log('Please put password at lease 8.');
//     }

//     if (allowChars.length === 0) {
//         console.log('Please select at least one option.');
//         console.log(allowChars.length);
//     }

//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowChars.length);
//         password += allowChars[randomIndex];
//     }

//     return password;
// }

// const passwordLength = 0;
// const includeLowercase = false;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = pwGenerator(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
// console.log(`Generated Password: ${password}`);




// hello(har);


// Callback
// function hello (callback) {
//     console.log('Hello');
//     callback();
// };

// function har () {
//     console.log('How are you?');
// }

// sum(res, 2, 3);

// function sum (callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function res (result) {
//     console.log(result);
// }







// forEach Array

// let Arr = [1, 2, 3, 4, 5];

// Arr.forEach(triple);

// function display(element) {
//     console.log(element);
// }

// function double (element, index, array) {
//     array[index] = element * 2;
//     console.log(array[index]);
// }

// function triple (element, index, array) {
//     array[index] = element * 3;
//     console.log(array[index]);
// }



// let fruits = ['apple', 'banana', 'coconut'];

// fruits.forEach(transform);

// function transform(element, index, array) {
//     // array[index] = element.toUpperCase();
//     // array[index] = element.toLowerCase();
//     // array[index] = element.charAt(0).toUpperCase();
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
//     console.log(array[index]);
// }



// Methods
// let numbers = [1,2,3,4,5];

// const square = numbers.map(sq);
// console.log(square);

// function sq(element) {
//     return Math.pow(element, 2);
// }


// const dates = ['2024.01.30', '2025.05.14', '2026.11.22'];

// const formatted = dates.map(formatDate);
// console.log(formatted);

// function formatDate(element) {
//     const clean = element.split('.');
//     return `${clean[2]}-${clean[1]}-${clean[0]}`;
// }

// const myName = ['Chhayvoin-Vy'];
// const formatted = myName.map(khName);
// console.log(formatted);

// let h1 = document.getElementsByClassName('myname');
// h1[0].innerText = "My name is " + formatted;

// function khName(element) {
//     const arrange = element.split('-');
//     const lastname = arrange[1].toUpperCase();
//     // console.log(lastname);
//     return `${lastname}, ${arrange[0]}`;
// }




// filters
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let fruits = ['coconut', 'banana', 'bestfruitonearth', 'tomato', 'grap'];

// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);
// let longW = fruits.filter(longWord);
// let shortW = fruits.filter(shortWord);

// console.log(evenNums);
// console.log(oddNums);
// console.log(longW);
// console.log(shortW);

// function isEven(element) {
//     return element % 2 === 0;
// }

// function isOdd(element) {
//     return element % 2 === 1;
// }

// function longWord(element) {
//     return element.length >= 8;
// }

// function shortWord(element) {
//     return element.length <= 4;
// }



// reduce 
// const grades = [30, 60, 70, 90];
// const max = grades.reduce(findMax);
// console.log(max);

// function findMax(accum, element) {
//     return Math.max(accum, element);
// }

// const sum = grades.reduce(total); // 30+60 = then + 70 = then + 90 =
// console.log(sum);

// function total(a, el) {
//     return a + el;
// }



// function expression
// const hello = function() {
//     console.log('Hello!');
// }
// setTimeout(hello, 3000);


// setTimeout(function() {
//     console.log("Hey!")
// }, 3000);

// const grades = [30, 60, 70, 90];
// const max = grades.reduce(function findMax(accum, element) {
//     return Math.max(accum, element);
// });
// console.log(max);




// Arrow Function -> Only use once

// const hello = function() {
//     console.log('Hello!');
// }
// hello();

// hello = () => console.log("Hi!");
// hello();

// hello = (name, age) => {console.log(`Hello, ${name}`) // name parameter
//                     console.log(`You are ${age} years old!`)
//                     };
// hello('Voin', 30);

// setTimeout( () =>
//     console.log("Hello")
// , 3000);





// Object
// object = {key:value,
//            function() }
// const person = {
//     lastname: 'Vy',
//     firstname: 'Voin',
//     age: 25,
//     isCoding: true,
//     canSpeak() {  // Function 
//         console.log('English');
//         console.log('Khmer');
//     },
//     favDrink : function () { // Function Expression
//         console.log('Coffee');
//     },
//     hoB : () => { // Arrow Function 
//         console.log('Digital Illustration');
//     },
// }
// person.hoB();



// Constructor
// function Phone(brand, model, color, storage) {
//     this.brand = brand,
//     this.model = model,
//     this.color = color,
//     this.storage = storage
// }

// const myphone = new Phone('iPhone', '13 Pro Max', 'Blue', 256);

// console.log(myphone.brand)




// Classes
// class = (ES6 feature) provides a more structured and cleaner way to 
//              work with objects compared to traditional constructor functions
//              ex. static keyword, encapsulation, inheritance

// class Phone {
//     constructor(brand, model, color, storage, price) {
//         this.brand = brand,
//         this.model = model,
//         this.color = color,
//         this.storage = storage,
//         this.price = price
//     }
//     displayInfo() {
//         console.log(`Your phone brand: ${this.brand}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Color: ${this.color}`);
//         console.log(`Storage: ${this.storage}GB`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }
// }

// const phone1 = new Phone('iPhone', '13 Pro Max', 'Blue', 256, 1999.99);
// const phone2 = new Phone('Samsung', 'S20', 'Green', 128, 899.99);

// phone1.displayInfo();
// phone2.displayInfo();


// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)
// class User {

//     static usercount = 0;

//     constructor(username) {
//         this.username = username
//         User.usercount ++;
//     }

//     static getUserCount() {
//         console.log(`There are ${this.usercount} online in total.`);
//     }
// }

// const user1 = new User("Voin");
// const user2 = new User("Jemy");
// const user3 = new User("Travis");

// User.getUserCount();
// console.log(`Total users is: ${User.usercount}`);


// Inheritance = allows a new class to inherit properties and methods 
//                         from an existing class. Helps with code reusability
// class Animals {

//     alive = true;

//     eat() {
//         console.log(`This ${this.name} is eating.`);
//     }

//     sleep() {
//         console.log(`This ${this.name} is sleeping.`);
//     }

//     colour() {
//         if (this.color) {
//             console.log(`This ${this.name} is ${this.color}.`);
//         } else {
//             console.log(`This ${this.name} has no color.`);
//         }
//     }
// }

// class Rabit extends Animals {
//     name = 'rabit';
//     color = 'white';
// }

// class Cow extends Animals {
//     name = 'cow';
// }

// class Monkey extends Animals {
//     name = 'monkey';
// }

// const rabit = new Rabit();
// const cow = new Cow();
// const monkey = new Monkey();

// console.log(rabit.color);
// rabit.colour();
// cow.colour();
// monkey.colour();



// Super() = keyword is used in classes to call the constructor or
//              access the properties and methods of a parent (superclass)
//              this = this object
//              super = the parent
// class Animal{

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal{
    
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal{
    
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// rabbit.run();
// fish.swim();
// hawk.fly();







// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

// --------- EXAMPLE 1 ---------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// --------- EXAMPLE 2 ---------
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ['red', 'green', 'blue', 'black', 'white'];

// [colors[0], colors[4]] = [colors[4], colors[0]]

// console.log(colors);

// --------- EXAMPLE 3 ---------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// --------- EXAMPLE 4 ---------
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//   firstName: 'Spongebob',
//   lastName: 'Squarepants',
//   age: 30,
//   job: "Fry cook",
// };
// const person2 = {
//   firstName: 'Patrick',
//   lastName: 'Star',
//   age: 34
// };

// const {firstName, lastName, age, job="Unemployed"} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// --------- EXAMPLE 5 ---------
// DESTRUCTURING IN FUNCTION PARAMETERS

// function displayPerson({ firstName, lastName, age, job="Unemployed" }) {
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// displayPerson(person1);
// displayPerson(person2);






// Nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  
// const person = {
//     fullName: 'Voin',
//     age: 30,
//     isStudent: true,
//     hobbies: ['cooking', 'drawing', 'eating'],
//     address: {
//         street: 3912,
//         city: 'Chattanooga',
//         country: 'United States',
//     },
// }

// console.log(person.hobbies[2]);
// console.log(person.address.street);

// for (const property in person.address) {
//     console.log(person.address[property]);
// }

// class Person {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address {
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person('Voin', 30, '3912', 'Chattanooga', 'United States');
// const person2 = new Person('Jeremy', 42, '3911', 'Chattanooga', 'United States');
// const person3 = new Person('Travis', 55, '3910', 'Chattanooga', 'United States');

// console.log(person1.address.country);
// console.log(person3.address);






// Array in object
// const fruits = [ 
//         {name: "apple", color: "red", calories: 95}, 
//         {name: "orange", color: "orange", calories: 45}, 
//         {name: "banana", color: "yellow", calories: 105}, 
//         {name: "coconut", color: "white", calories: 159}, 
//         {name: "pineapple", color: "yellow", calories: 37}
//     ];

        
// fruits.push({name: 'grape', color: 'purple', calories: 25});
// fruits.pop();
// fruits.splice(1,2);

// ---------- forEach() ----------
// fruits.forEach(fruit => console.log(fruit));
// fruits.forEach(fruit => console.log(fruit.name));
// fruits.forEach(fruit => console.log(fruit.color));
// fruits.forEach(fruit => console.log(fruit.calories));

// ---------- map() ----------
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// ---------- filter() ----------
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);





// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings
// const fruits = ['apple', 'bababa', 'grape', 'orange'];
// fruits.sort();

// console.log(fruits);

// Fisher-Yates algorithm

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// shuffle(cards);

// console.log(cards);

// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));

//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }


// Date(year, month, day, hour, minute, second, ms)
// const date = new Date();
// console.log(date);




// Closure function inside function
// function scoreMath(increaseP, decreaseP, finalResult) {
    
//     let score = 0;

//     function increaseP(points) {
//         score += points;
//         console.log(`Score increased: +${score}`);
//     }

//     function decreaseP(points) {
//         score -= points;
//         console.log(`Score increased: +${score}`);
//     }

//     function finalResult(score) {
//         return score;
//     }

//     return(increaseP, decreaseP, finalResult);

// }

// const finalResult = scoreMath();

// finalResult.increaseP;

// console.log(`The current score is: ${finalResult.points}`);
// function outer(){

//     const message = "Hello";

//     function inner(){
//         console.log(message);
//     }

//     inner();
// }

// message = "Goodbye";

// outer();

// --------- EXAMPLE 2 ---------

// function createCounter() {

//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount() {
//         return count;
//     }

//     return {increment, getCount};
// }
 
// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`Current count: ${counter.getCount()}`);

// --------- EXAMPLE 3 ---------

// function createGame(){

//     let score = 0;

//     function increaseScore(points){
//         score += points;
//         console.log(`+${points}pts`);
//     }
    
//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`);
//     }
    
//     function getScore(){
//         return score;
//     }

//     return {increaseScore, decreaseScore, getScore};
// }

// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);

// console.log(`The final score is ${game.getScore()}pts`);



// Error = An Object that is created to represent a problem that occurs
//              Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                     ex. close files, close connections, release resources

// try{
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));
    
//     if(divisor == 0){
//         throw new Error("You can't divide by zero!");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("This always executes");
// }

// console.log("You have reached the end!");




