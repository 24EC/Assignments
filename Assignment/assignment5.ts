// Assignment (Conditional Statements & Loops)

// Employee Table
// S.No Name Base Salary Experience (Years) Year-End Rating (Out of 5)

interface Employee {
    sNo: number, name: string, baseSalary: number, experience: number, yearEndRating: number
}


// 1 Alice Johnson 75000.0 5.1 4.2
// 2 Bob Smith 68000.0 3.2 3.8
// 3 Carol Davis 82000.0 7.1 4.5
// 4 David Brown 90000.0 10.2 2.5
// 5 Eva Green 60000.0 2.4 3.5


const employees: Employee[] = [
    { sNo: 1, name: "Alice Johnson", baseSalary: 75000.0, experience: 5.1, yearEndRating: 4.2 },
    { sNo: 2, name: "Bob Smith", baseSalary: 68000.0, experience: 3.2, yearEndRating: 3.8 },
    { sNo: 3, name: "Carol Davis", baseSalary: 82000.0, experience: 7.1, yearEndRating: 4.5}, 
    { sNo: 4, name: "David Brown", baseSalary: 90000.0, experience: 10.2, yearEndRating: 2.5},
    { sNo: 5, name: "Eva Green", baseSalary: 60000.0, experience: 2.4, yearEndRating: 3.5}];

// Display table header
console.log("S.No\tName\t\tBase Salary\tExperience (Years)\tYear-End Rating");
console.log("--------------------------------------------------------------------------");

// Display each employee's details
for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    console.log(`${emp.sNo}\t${emp.name}\t${emp.baseSalary}\t\t${emp.experience}\t\t\t${emp.yearEndRating}`);
}

// Hike
// Rating % of base Salary as variable pay Bonus
// > =4.0 15.0 1500
// >=3 && < 4 10.0 1200
// < 3.0 3.0 300


function calcHike(emp: Employee): number {
    let variablePayPercent: number;
    let bonus: number;

    // Determine variable pay % and bonus based on rating
    if (emp.yearEndRating >= 4.0) {
        variablePayPercent = 15.0;
        bonus = 1500;
    } else if (emp.yearEndRating >= 3.0) {
        variablePayPercent = 10.0;
        bonus = 1200;
    } else {
        variablePayPercent = 3.0;
        bonus = 300;
    }

    // Extra Perks
    // Employees with Experience >= 5 Years get extra Reward of 5000;
    // Extra reward for experience >= 5 years
    let reward = emp.experience >= 5 ? 5000 : 0;

    // Calculate hike amount
    let hikeAmount = (emp.baseSalary * (variablePayPercent / 100)) + bonus + reward;

    // Calculate hike percentage
    return (hikeAmount / emp.baseSalary) * 100;
}

console.asse

// There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
// Values in Map with EmployeeName and HikePercentagevalue and Print them.

// Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
// Hike % = Hike / Base Salary .