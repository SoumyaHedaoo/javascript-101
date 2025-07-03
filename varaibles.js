
//use strict --> makes the script to run in mordern javascript way :: not necessary to write nowadays
"use strict";


// const ---> once decleard cannot be changed

const employeeId = 1234;


// employeeID =1222211 ---->not allowed for const


//Javascript is Dynamically-Typed language i.e

let something = "ben10";
//here variable something is string but we can assign integer value to it also
something = 12345;
//not something is integer



let employeeName="John doe";

/*
do not do this though works . shows error in strict mode

```
emplyeeName="john Doe";

```

Avoid using var i'll say dont use it it has some issues with blockscope and functional scope
*/

//alert will not work in vscode or node.js beacuse node do not contain window API which contain alert or something like that
alert(employeeId);




console.log(employeeName);