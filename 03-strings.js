const strr= "string -primitive-storedinSTACK";
const newStr =new String ( "stringObject-referenceinStack-stroredinHEAP")//rarely used

console.log(newStr.split('-'));

/*
const str = "abs";
const newstr = new String("abs");

console.log(typeof str);      // 👉 "string"
console.log(typeof newstr);   // 👉 "object"

console.log(str === "abs");       // 👉 true
console.log(newstr === "abs");    // 👉 false (object !== string)



//warnimg for string object usage

const a = new String("abc");
const b = new String("abc");

console.log(a === b); // false — different objects, even if content is same


/*


| Feature                    | `const str = "abs"`        | `const newstr = new String("abs")` |
| -------------------------- | -------------------------- | ---------------------------------- |
| **Type**                   | `string` (primitive)       | `object` (String object wrapper)   |
| **Stored in**              | Stack                      | Heap (as it's a reference type)    |
| **Mutability**             | Immutable                  | Mutable (as an object)             |
| **Used for**               | Normal string manipulation | Rarely used, mostly for edge cases |
| **Typeof result**          | `typeof str → "string"`    | `typeof newstr → "object"`         |
| **Equality Check (`===`)** | Compares value             | Compares reference, not just value 


| Aspect         | `"abc"`                | `new String("abc")`              |
| -------------- | ---------------------- | -------------------------------- |
| Type           | Primitive string       | Object                           |
| Stored in      | Stack                  | Heap (object on stack reference) |
| `typeof`       | `"string"`             | `"object"`                       |
| `=== "abc"`    | `true`                 | `false`                          |
| Recommendation | ✅ Use this (preferred) | ❌ Avoid unless necessary         |


*/



///////////////////////////////////////////////////////////////////////////////////////////////////////


//MATHS 



console.log(Math.random());

//find random number between two values :

let min=10;
let max=20;

console.log(Math.floor(Math.random()*(max-min+1)+min));

/*
Because you're defining the size of the range (the interval width).
You're saying: "Give me a number this far from min."
*/