////Exercise 1: Simple Calculator with a Loop
// This task is to create a simple calculator that:
// Asks the user to input two numbers.
// Asks for the operation (+, -, *, /).
// Performs the operation and displays the result.
// Continues until the user types "exit".

// let a = parseInt(prompt("Enter the First Number"));

// let b = prompt("Enter your opperation like +,-,*,/,%");

// let c = parseInt(prompt("Enter your Second number"));

// switch (b) {
//   case "+":
//     console.log("Two number sum = ", a + c);
//     break;
//   case "-":
//     console.log("Two number minus = ", a - c);
//     break;
//   case "*":
//     console.log("Two number multi = ", a * c);
//     break;
//   case "/":
//     console.log("Two number divide = ", a / c);
//     break;
//   case "%":
//     console.log("Two number modulos = ", a % c);
//     break;

//   default:
//     console.log("Invalid Opperation");
//     break;
// }


// Exercise 2: Guessing Game

// let randomNumber = Math.random() * 100;
// let number = Math.ceil(randomNumber);
// // console.log(number); to check the number
// while (true) {
//   let GuessNumber = parseInt(prompt("Enter The Guess Number"));
//   if (GuessNumber === number) {
//     console.log("Congratulation ! you find the number " + number);
//     break;
//   } else if (GuessNumber < number) {
//     console.log("Correct Number is Higher");
//   } else if (GuessNumber > number) {
//     console.log("Correct number is Lower");
//   } else {
//     console.log("Try again");
//   }
// }

// //Exercise 3: Word Counter

// let userInput = prompt("Enter your word");
// let count = 0;
// for (let i = 0; i < userInput.length; i++) {
//   count++;
// }
// console.log("The total word in the userInput have = ", count);

// // Exercise 4: Login Attempt Limit

// let password = "Dinesh@123";

// i = 1;
// while (i <= 3) {
//   let v = 4 - i;
//   let Attempt = prompt(`Enter your password \nyou have only attemts:${v}`);
//   if (password === Attempt) {
//     console.log("Login Successfully");
//     break;
//   } else {
//     console.log("Wrong password ");
//     console.log("you have only attemts:", 3 - i);
//   }

//   i++;
// }
