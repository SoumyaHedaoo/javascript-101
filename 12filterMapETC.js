const numbers = [1 , 3 , 4 ,5 , 6, 7, 8,9, 7,6,9 , 8 ];

//for-each : do not reurn any thing


//filter:
//user true/false expresion as afilter -> for every element is the condition specified is true gets returned or stored in new array
//returns true stuffs

const newNums = numbers.filter((ele)=> ele>=6);
console.log(newNums);


//map function
/*
| Feature          | `forEach()`                                 | `map()`                                            |
| ---------------- | ------------------------------------------- | -------------------------------------------------- |
| **Purpose**      | To perform **side effects** (logging, etc.) | To **transform** data and return a new array       |
| **Return value** | Always returns `undefined`                  | Returns a **new array** with transformed elements  |
| **Chaining**     | ❌ Not chainable (returns nothing)           | ✅ Chainable (returns array)                        |
| **Mutation**     | You can mutate things (not ideal)           | Should return pure transformation (no mutation)    |
| **Use Case**     | When you want to **do something** with data | When you want to **create new data from existing** |

*/

const newArr = numbers.map((ele)=> ele*10);
console.log(newArr);

//If you're doing something with the array (logging, DOM, side effects) → use forEach()

//If you're building a new array from the old one → use map()

//==============================CHAINING======================================

const newVect = numbers
                .map((ele)=> ele*10)
                .map((ele)=> ele+1)
                .filter((ele)=> ele>=50)

console.log(newVect );




//REDUCE//

//produces output as per calcluation in user given callback funcn called reduce


const totalSum = newVect.reduce((acc , ele)=>( acc += ele ) , 0);
console.log(totalSum);
