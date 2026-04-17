//syntax to store data  in js : Declaration Variable = Data;

//Operators ==> Operators are special chars used to perform operators in js
// there are 5 types of Operators in js

//1. Airthmatic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Ternary Operators

//1. Airthmatic Operators: the special chars used to perform mathematical Operators in js (+,-,%, /,*)
//+ addition
//- subtraction
//* multiplication
// / division 
// % modulus
// ++ increment(increases a variable -s value by 1)
// -- decrement (decreases a variable -s value by 1)

let a =20;
let b =30;

// a++ => post increment => post execution of current line , increase  the value by 1
console.log("Post Increment"+ (a++));
console.log("Next line of Post Increment"+ (a));

// ++b => pre increment =>  increase  the value by 1 before  execution of current line node 
console.log("Pre Increment"+ (++b));
console.log("Next line of Pre Increment"+ (b));


// a-- => post decrement => post execution of current line , decreases  the value by 1
console.log("Post decrement"+ (a--));
console.log("Next line of Post decrement"+ (a));

// --b => pre decrement =>  decreases  the value by 1 before  execution of current line node 
console.log("Pre decrement"+ (--b));
console.log("Next line of Pre decrement"+ (b));

//2. Assignment Operators:: the special chars used to assign value to the variable 
let c =20;
console.log("Initial Value Of c: "+ c);
c+=10;
console.log("After using += Operators: "+ c);
c-=10;
console.log("After using -= Operators: "+ c);
c*=10;
console.log("After using *= Operators: "+ c);
c/=10;
console.log("After using /= Operators: "+ c);

//3. Comparison Operators: special chars used to compare value and return a boolean value(true/false)(==.===, !=, >,<,>=,<=)
//== represent loose equality
// === represent strict equality    

let x = 10;
let y= 20;
console.log("Loose equality with ==: "+ (x==y));
console.log("strict equality with ===: "+ (x===y));
console.log("Not equality with !=: "+ (x!=y));
console.log("Greater than or equal with >=: "+ (x>=y));
console.log("less than or equal with <=: "+ (x<=y));

//4. Logical Operators: special chars used to perform Logical opreations on boolean value(true/false)(&&, ||, !)
//&&  represent Logical AND
//|| represent Logical OR
//&&  represent Logical Not

let i= 10;
let j = 11;

console.log((i<j) && (i==j));
console.log((i<j) || (i==j));
console.log((i<j) && (i==j));

//5. Ternary Operators: special chars used to perform a conditional opreations (?)

//let result =(condition)? valueOfTrue :valueOfFalse;

let age =17;
let result = (age>=18) ? "Eligible to vote" : "Not Eligible to vote";
console.log(result);


