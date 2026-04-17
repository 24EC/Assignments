//syntax to store data  in js : Declaration Variable = Data;


// in javascript, we can declare the variable bty using three different keywords.
//1. Var(avoided in modern Javascript)
//2. let(user for variable that can be reassigned)
//3. const(user for constant values that cannot  be reassigned)

// these three different varible declaration will differ mainly based on four important parameters

//1. Initialization 
//2. Reassignment 
//3. Re-Declaration
//4. scope

//1. Initialization
var a;// it is  not mandatory to Initialization at the beginning. you can add later as well.
let b;// it is  not mandatory to Initialization at the beginning. you can add later as well.
const c=10; // it is mandatory to Initialization the value at the beginning.


//2. Reassignment 
var a=10;// var will allow Reassignment
let b=20;// let also allow Reassignment
//const c=30; //const wont allow Reassignment

//3. Re-Declaration
var a="bharath";// var will allow Re-Declaration
//let b="sarath";// let wont allow Re-Declaration
//const c="dawat"; //const wont allow Re-Declaration

//4. scope-- scope is all about where we can use this data.

// let and const are block-scoped.
//var is not block-scoped.

{
    let x =100;
    const y = 200;
    var z = 300;

}
// console.log(x);
// console.log(y);
console.log(z);