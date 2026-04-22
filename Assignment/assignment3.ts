//Assignment -3 (Arrays/Datatypes/Operators)

// 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and marks [75, 80, 82] 
let studentNames:string[]= ["Suresh","Mahesh","Naresh"];
let studentMarks:number[]= [75, 80, 82];

// Add 10 marks to each students using assignment operators and
let updatedMarks: number[] = [];

for(let i:number=0; i<studentNames.length; i++){
    let newMark: number = studentMarks[i];
    newMark += 10; 
    updatedMarks.push(newMark);
}

// store it into another array, after adding 10 marks identify the average marks of all students
let totalMarks: number = 0;
for (let mark of updatedMarks) {
    totalMarks += mark;
}
let averageMarks: number = totalMarks / updatedMarks.length;

// Expected Output:
// Updated Marks:
// Suresh: 85
// Mahesh: 90
// Naresh: 92
// Average Marks: 89.0

//Display results
console.log("Updated Marks:");
for (let i: number = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}
console.log(`Average Marks: ${averageMarks.toFixed(1)}`);
 
