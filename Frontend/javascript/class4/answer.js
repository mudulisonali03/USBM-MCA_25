//1.Math.floor()

console.log (Math.floor(4.9)) ; //4
console.log (Math.floor(-2.5)) ; //-3

//2. How would you generate a random number between 1 and 100?
const randomNumber = Math.floor (Math.random()*100)+ 1 ;
console.log(randomNumber);

 //or

 const random_number = Math.round(Math.random()*99) + 1 ;
 console.log(random_number) ;

 //3.Math.ceil()

 console.log(Math.ceil(3.2)) //4
 console.log(Math.ceil(4.9)) //5
 console.log(Math.ceil(-2.5)) //-2

 //4.Math.pow(2,3)
 console.log (Math.pow(2,3)) //8

 //or
 console.log (2**3) ;//8

 //5.Math.PI
 console.log (Math.PI) ; //3.141592653589793
//TASK-2

 //1. Task: Generate a random number between 1 and 100.
 
 let final1 = 100;
 let start1 = 1;
 let total_number1 = (final - start + 1) ;
let random_number2 = Math.floor (Math.random() * total_number + start) ;
console.log (random_number1) ;

// 2. Task: Round the number 6.75 down to the nearest integer.

console.log(Math.round(6.75));
// // 3. Task: Round the number 9.12 up to the nearest integer.

console.log(Math.ceil(9.12));

 // 4. Task: Generate a random number between 5 and 27 (inclusive).
let final = 27 ;
  let start = 5 ;
 let total_number = (final - start + 1) ;
let random_number1 = Math.floor (Math.random() * total_number + start) ;
 console.log (random_number1) ;

 // 5. Task: Add 5 days to the current date.

let date = new Date();
console.log (date.getDate() + 5 );
 // 6. Task: Get the number of milliseconds between January 1, 2023, and today.
let startdate = new Date('2023-01-01') ;
let enddate = new Date('2024-10-15') ;

let difMilliseconds =enddate.getTime() - startdate.getTime();
console.log(difMilliseconds);//56419200000 = 564,192 seconds
//  = 9,403.2 minutes
//  = 156.72 hours
//   = 6.53 days 
//   = 17.91 years

// 7. Task: Get the current hour.

let date3 = new Date();
let current_hour = date.getHours();

console.log(current_hour); //21

 // 8. Task: Create a date for January 1, 2025.
 let date4 = new Date('2025-01-01');
 console.log(date); //2024-10-15T15:42:19.556Z

 // 9. Task: Get the current day of the week (0 for Sunday, 6 for Saturday).

 let date2 = new Date();
 let current_day = date.getDay();

 console.log(current_day);//2

 // 10. Task: Get the current month (0-11).

 let date1 = new Date();
 let current_month = date.getMonth() + 1 ;

 console.log(current_month); // 10

// // 11. Task: What is the difference between getDate() and getDay()?

console.log(date.getDate()); //15

console.log(date.getDay()); //2

getDate()


