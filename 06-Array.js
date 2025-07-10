const arr = [1 , 3 , 2 , false , true , 'a' , "hellow"];
/*

arrays in js keep all values irrespective of there datatypes : here 1 array can contain multiple datatypes


console.log(arr);
console.log(typeof arr[4]); // output -> boolean


arr.unshift(98) //insert element at start of array
arr.shift() // removes ele from the start of array
*/


//----------------------------------------------------------------------------------------




//join
/*
const newArr = arr.join('-') // convert array to string where each element is seperated by seperator

console.log(newArr); //output-> 1-3-2-false-true-a-hellow
console.log(typeof newArr); //output -> String
*/







//======================================================================================





//slice and splice
/*
console.log("orgArray : " , arr); // output : [1 , 3 , 2 , false , true , 'a' , "hellow"]

//slice operation
//in slice operation elements from start to end-1 are extracted and returned: 
// ***do not manipulate original array ***
const slicedArray = arr.slice(1 , 3);  

console.log("slicedArray :" , slicedArray); // output: [ 3, 2 ]

console.log("orgArray : " , arr); // output : [1 , 3 , 2 , false , true , 'a' , "hellow"]


//splice
//in splice operation elements from start to end are extracted and returned
// p***MANIPULATES ORIGINAL ARRAY*** --->>> REMOVES EXTRATED ELEMTS FROM ORIGINAL ARRAY RETURNS REST OF ARRAY
//can also add new elements to the original array if passed in params in place of deleted words 
const splicedArray = arr.splice(1 , 3 /* , "world" , "new" , "added" , "words" );

console.log("Spliced Array : " , splicedArray); // Spliced Array :  [ 3, 2, false ]


console.log("org Array after splice : ", arr);// org Array after splice:  [ 1, true, 'a', 'hellow' ]

*/


//section -02


let benTen = ['Bigchill' , 'swamfire', 'alienX'];
let superhero = ['superman' , 'batman' , 'aquaman'];

//benTen.push(superhero); // ['Bigchill', 'swamfire', 'alienX', ['superman', 'batman', 'aquaman']]
//what it dose is it takes superhero array as a object and pushed whole array in the benTen array 
//console.log(benTen);


const allHero = benTen.concat(superhero);

console.log(allHero);

//use concate merge two arrays

const concatArray = benTen.concat(superhero);

//but ... - > spread operator is most commonly used
// spread operatoe [...] : it converts array to elements 
const mergerSpreadArray = [...allHero , ...benTen]

console.log(mergerSpreadArray); //['Bigchill', 'swamfire','alienX',   'superman','batman',   'aquaman','Bigchill', 'swamfire','alienX']
  
//flat

const nestedArray = [1,2,3,[4,4,6] , 7 , [6 ,[8]]];

const flattendarray= nestedArray.flat(Infinity);

console.log(flattendarray);







//////////////////////////////////////////////////////////////////////////////////////////////////////




//convert to array

//from

//static method creates a new, shallow-copied Array instance from an iterable or array-like object.

const words = "hii how are you ?i am fine";
console.log(Array.from(words));

console.log(Array.from({name : "soumya"})); //optput : [] ## as it is not an iteratble it returns empty array


//of
//Returns a new array from a set of elements.
const a=10 , b=10 , c=100;

console.log(Array.of(a , b , c)); // output : [ 10, 10, 100 ]

