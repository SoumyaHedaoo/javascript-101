//console.log(this); // will give {}->empty object in node enviornment and will give window object in browser

//'use strict'


//function decleration

function normalTest(){
    const userName = "abd"
    console.log(this); // return some metadata , global object dump , [undefined in strict mode]

    console.log(this.userName); // undefined -> because it is local variable and not property of this object 
    // if you wan to make this work add usenae to this object will not work in strict mode as this is undefined in strict mode in node env.
}

normalTest();


//variable wala function works the same

const varFuncnTest=function (){
    const userName = "abd"
    console.log(this); // return some metadata , global object dump , [undefined in strict mode]

    console.log(this.userName); // undefined -> because it is local variable and not property of this object 
    // if you wan to make this work add usenae to this object will not work in strict mode as this is undefined in strict mode in node env.
}


//arrow function

const arrowFuncn = () =>{
    const user = "asn";
    console.log(this); // {}

    console.log(this.user); // undefined
    
}



const expRet = (num1 , num2) => (num1+num2)

const objRet = () => ({user : "name"});


//+++++++++++++++++++++++++++++++++++++IIFE++++++++++++++++++++++++++++++++++++++//
//immediately invoked function expression


//used : avoid polluting global scope

//named iife
(function addThree(){
    console.log("three");
    
})(); // ->always make sure that you use semicolon with iife if multiple iife is used 

//unnamed iife
((text)=>{
    console.log(text);
    
})("awdc")