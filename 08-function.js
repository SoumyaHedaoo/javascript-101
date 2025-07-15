//declare function

function functionName (parameter){
    console.log(parameter);
    console.log(this);

    
}

//function call

functionName("hello world")


function studyRestSpread (...nums){ // accept infinite arguments and conevert them to array
    return nums;
}

console.log(studyRestSpread(100 , 23 , 45 , 23 , 44)); //[ 100, 23, 45, 23, 44 ] -> real array

function restVariation(val , val2 , val3 , ...nums){
    return nums;
}

console.log(restVariation(10 , 3 , 5 , 2 , 3, 2)); // nums=[ 2, 3, 2 ] , because val=10 , val2=3 , val3=5



////////////////////////////////////////////

//1st way


addOne(2); // in this way we can call or declare function in any order
function addOne(num){
    return num+1;
}


//2nd way

//addTwo(9) // this line will give error
const addTwo = function (num){
    return num+2;
}


addTwo(7) ; // THIS WILL WORK





