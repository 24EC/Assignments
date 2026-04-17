//syntax to store data  in js : Declaration Variable = Data;

// Data types in java script are divided in to two different categories.
// Primitive Data types (immutable data types)
// Non-Primitive Data types( mutable data types)


// immutable

let a=10;
a+10;
console.log(a);

//mutable
let obj= {
"name":"bharath",
"id":1234
}
obj.name="sarath"
console.log(obj);

//mutable
let b= [1,2,3];
b.push(4);
console.log(b);

//******************************************************/
//************** Primitive Data types *******************/
//******************************************************/

//1. number ==> the datatype  that can help us to store numbers  with decimals or without decimals

let num1 = 10;
let num2 = 10.55;
console.log(num1);
console.log(typeof num2);
console.log(typeof num1);

//2. String ==> the datatype  that can help us to store text value . we can use single or double quotes or backticks.

let str1= "He told me, 'good morning'."
let str2= 'I replied back with, "good morning".'
console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);


let empName = "Jyoti";
let location= "UP";
console.log("New employee name is "+empName+ " and location is" +location);
console.log('New employee name is empName and location is location');
console.log(`New employee name is ${empName} and location is ${location}`);

// boolean=> the datatype that can help us to store the result of a condition in the form of true or false.

let x = 10;
let y = 20;
let result = x>y;
console.log(result);
console.log(typeof result);

// Undefined => Undefined represents a variable  that has been declared but not assigned any value;
let age;
console.log(age);

// null  =>null  represents a variable  that has been declared but intensionally assigned any empty value ;

let salary = 10000;
salary = null;
console.log(salary);

//symbol =>


//******************************************************/
//************** Non-Primitive Data types *******************/
//******************************************************/

//1. object => object  Data types represents a collection of key value pairs.

let person ={
    name:"jyoti",
    age:26,
    visaStatus:true,
    addrees: {
       city: "delhi",
       state: "delhi",
       zip: 110074
    }
}

console.log(person.name);
console.log(person["name"]);


console.log(person.addrees.city);
console.log(person.addrees["city"]);

console.log(person);


//2. array => array represents a list of value.

let fruits = ["apple","banana", "orange", "mango"];
let prices=[300,80,200, 220];
let fruitsAndPrices= ["apple",300,"banana",80,"orange", 200, "mango",220];

//print mango from fruits
console.log(fruits[3]);
//print mango from fruitsAndPrices
console.log(fruitsAndPrices[3]);



//2. funtion => A funtion represents a block of code or colle collection of statementto complete a perticular task.

function getAccountBalance(){
console.log("Verify the home page is displayed");
let accountBalance =100000;
return accountBalance;
}

//3. set => set represent a collection of unique  value of any data type

