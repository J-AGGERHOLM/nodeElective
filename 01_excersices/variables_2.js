//you can run in strict mode
//"use strict";
//commented out strict mode to run script

//Missing declaration type
//NEVER ever do this
totalGlobalBariable = "";

//don't ever do this
var globalVariable = "This is defined in the global scope";

//if using strict mode, we can't use public because it is a reserved name
const public = "this variable is named public"

{//this is a block scope
    var someVariable = true;
    {
        var someVariable = false;
    }
    console.log(someVariable);
}//var 'bleeds through' and becomes false here

{
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable);
}//let does not bleed through


//this does not work because of var, because var bleeds through, 
// and i would become set to the latest number in the next scope
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
//use let for correct for loop:
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}