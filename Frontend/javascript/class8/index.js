//object()(key-value pairs)

// let student={
//     name:"sonali",//value
//     age:21, //traditional way
//     batch:"mca"
// };
// console.log(typeof(student));
//console.log(`${student.name},${student.age},${student.batch}`);

// Accessing Element-
//bracket notation([])
//dot notation(.)
let student=new Object();
student.name="sonali";
student.age=23;
student.batch="mca";
console.log(student);

//using 2 methode for accesing
console.log(student.name);
console.log(student["age"]);

//modify the value
student.name("ankita");
console.log(student);


       
    
    
    


