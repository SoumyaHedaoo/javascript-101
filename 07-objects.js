// Singolton : When object is decleared as object literal it is not singleton . 


// Object literal
const symb = Symbol("symb"); // symbol can be used as key using []
const newObj ={
    name : "Ben",
    "full name" : "Ben Tennyson", // cannot be accesed with . , only accessed with []
    age : 18,
    location : "NY",
    [symb] : "mySymbol", // only access with []
    aliens : ["swamfire" , "heatBlast" , "bigChill"],
}


console.log(newObj.name);
console.log(newObj["full name"]); // with . -> shows error
console.log(newObj.symb); // output -> undefined

console.log(newObj[symb]); // output -> mySymbol

console.log(newObj["aliens"]);

newObj["aliens"].push("humongosorus");
console.log(newObj["aliens"]);

newObj.name = "changed";
console.log(newObj.name);


Object.freeze(newObj); // after this statement nothing can be changed in the object

newObj.name = "benn" // will fail silently
console.log(newObj.name); // output -> "changed"

newObj["aliens"].push("alienX") // here it a change because freeze only works on top level object and array is another object in itself so it will change 
//to freez array also Object.freeze(newObj.aliens) // now this will freeze array too


console.log(newObj["aliens"]); //[ 'swamfire', 'heatBlast', 'bigChill', 'humongosorus', 'alienX' ]


//to get keys:
const objKeys = Object.keys(newObj);
console.log(objKeys); // return array of keys

//to get values:
const objVal = Object.values(newObj);

//entries convet key val pair to each indivisula obj

//merge multiple object into target object :

const obj1 = {a : 1 , b: 2 , c: 3};
const obj2 = {d : 3 , r: 4 , g: 0};

//method 1:
//const target = {obj1 , obj2};
//console.log(target); // { obj1: { a: 1, b: 2, c: 3 }, obj2: { d: 3, r: 4, g: 0 } }
//this will create an object who is holding 2 other object





//method 2:
const target = Object.assign({} , obj1 , obj2); // 1st param here is always target though not mandatory it is preffred
console.log(target); // { a: 1, b: 2, c: 3, d: 3, r: 4, g: 0 }
//merged keys of source object into target


//mehthod 3: most freqly used

const trgt = {...obj1 , ...obj2};









