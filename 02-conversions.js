let num = "33abc";


let numInInt = Number(num);


console.log(typeof  numInInt);


/*
functions :

Number , String , Boolean .....


Numbers : 

    "33" ->33
    "33abs" ->NaN
    null ->0
    .
    .
    .
    .



    check for these rules evertime you use it

Boolean :
    1 -> true
    0->false

    ""->false
    "aefe"->true
    ..
    .
    .
    .
    .

*/






//== and comparison works in different ways < ,> ,>= , <= convert arguments to number then check



console.log(null == 0);
console.log(null >= 0);
console.log(null > 0);