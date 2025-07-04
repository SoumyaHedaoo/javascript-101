
//PRIMITIVE DATATYPES :

String , Number , BigInt , null , undefined , Symbol , Boolean


call by Value  


### -> stored in Stack 




//REFERENCE (NON_PRIMITIVE) :

Array , Object , function ;

call by reference 

### -> stored in heap 




typeof outputs of datatypes :

console.log(typeof 42); -> "number"
console.log(typeof "hello"); -> "string"
console.log(typeof true); -> "boolean"
console.log(typeof undefined); -> "undefined"
console.log(typeof null); -> "object"
console.log(typeof {}); -> "object"
console.log(typeof []); -> "object"
console.log(typeof function() {}); -> "function"  //special case -> it is actually function object



///////////////////////////////////////////////////////////////////////////////////////////////////////////

// refer this for memory management : https://www.turing.com/kb/handling-memory-management-in-javascript

/* 
stack stores primite data types like variable , values , 


Where are variables stored — Stack or Heap?
🔹 Primitive Data Types (e.g., number, string, boolean, null, undefined, symbol, bigint)
✅ Stored directly in the Stack.

These are stored by value.

Inside the execution context on the stack.

🔸 Reference Data Types (e.g., Object, Array, Function)
The reference (memory address) is stored on the stack.

The actual object/data is stored in the heap.

So the stack holds the pointer/reference to the object in the heap.
*/
