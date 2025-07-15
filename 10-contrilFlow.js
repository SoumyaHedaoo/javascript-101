const month=2;

switch (month) {
    case 1:
        console.log("jan");
        
        break; //-> make sure that execution stops here
    case 2:
        console.log("feb");
            
        break;
    case 3:
        console.log("mar");
                
        break;

    default:   // -> this condition is always checked it is a fallback case 
        break;
}



// FALSY values : false , 0 , -0 , (BigInt) 0n , null , undefined , NaN , ""
//truthy value that might surprise  : "0" , "false" , " " , [] , {} 


/////////////////////////////////nullish coalescing operator(??)//////////////////////////

let val;

//val= 10 ?? 14; // 10
val= undefined ?? 34 ;  //34



//Ternary operator

condition ? true : false ; 




let balance=10000

balance >=5000 ? console.log("approved") : console.log("denied"); // approveed


