//Array
//Array is a colleection of elements.
let newArray=[];
console.log(newArray);
console.log(typeof newArray);

let name="sona";
let age="21"; 
let proffession="students";
let isMarried=false;

let useArray=["sonali",21,"sona",false];
console.log(useArray);
//array declaration:
let newNumber=new Array(1,2,3,4,5);
console.log(newNumber);

//Accessing:

let array=new Array(22,12,56,78,89,"ankita");
let num1=Array.length;
console.log(num1);
console.log(array[4]);

//last element:
console.log(array[array.length-1]);

//modify
let cities=["bbsr","bhadrak","balesore","ctc","jajpur"];
console.log(cities);
let modifiedcity="puri";
cities[2]=modifiedcity;
console.log(cities);

//add element:
let addcity="jagatsinghpur";
cities.push(addcity);
console.log(cities);//add element in an array using push()method (add in last).

//pop method()
console.log();
console.log(cities);

//shift()
cities.shift();
console.log(cities);
//add
let newcity="kkt";
cities.unshift(newcity);
console.log(cities);

    












    
