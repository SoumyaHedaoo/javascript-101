// Temporal is not usable yet


const dateNow =new Date(); // instance of date -> type : object

console.log(typeof dateNow);  //object



console.log(dateNow); // 2025-07-05T09:55:49.645Z -> not usable and not redable


console.log(dateNow.toDateString()); // Sat Jul 05 2025 
console.log(dateNow.toLocaleDateString()); //5/7/2025
console.log(dateNow.toLocaleString()); // 5/7/2025, 3:27:45 pm



