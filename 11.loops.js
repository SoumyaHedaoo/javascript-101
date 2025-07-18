//FOR OF                                 js objects are not iteratable using for of loop

const arr = [1 ,3 ,9 , 4,5,6 ,7 , 0, 8,];


for (const i of arr) {
    console.log(i);
    
}


//---------------------------MAPS-------------------------------//
//store unique values
//remember order of insertion


const countryMap = new Map();

countryMap.set("IN" , "India");
countryMap.set("USA" , "United States Of America");
countryMap.set("ESP" , "spain");
countryMap.set("IN" , "India");


console.log(countryMap); 
/*Map(3) {
    'IN' => 'India',
    'USA' => 'United States Of America',
    'ESP' => 'spain'
  } */
    //map iteration using for of
    for (const [key , val] of countryMap) {
        console.log(key , val);
    }




//===============================================================

//objects are not iteratable using for Of

myobj = {
    name : "sou",
    age : "23" , 
}


//console.log(key , val); // TypeError: myobj is not iterable
//for (const [key , val] of myobj) {
//
//    
//}


//-----------------------------------------------------------------------------//


//forEach

const hehe = [1,2,3,4,5,6,8,0];

//hehe.forEach(printIt()); //what this statement says is that there is a function call printIt . execute it and whatever it returns pass it to foreach as callback : in this case printIt returns undfined . so it shows an error
//correct way


hehe.forEach(printIt);

function printIt(item){
    console.log(item);
    
}