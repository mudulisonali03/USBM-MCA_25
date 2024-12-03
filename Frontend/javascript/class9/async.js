// //async operations
// console.log("start");
//     console.log("middle");
//     console.log("end");
//     console.log("start");
//     setTimeout(() =>{
//         console.log("middle");
//     },2000);
//     console.log("end");
const url="https://jsonplaceholder.typicode.com/users";
fetch(url)
.then((res)=>res.json())
.then((res)=>console.log(res))
.catch((error)=>console.log(err));

async function fetchdata(){
    try{
const response=await fetch(url);
const data=await response.json();
console.log(data);
    }catch(err){
console.log(err);
    }
};;
fetchdata();



//home page(carouse);
//about page (navbar,footer)
//prouduct page(nav & footer)
//cart page
//sing up /login page









