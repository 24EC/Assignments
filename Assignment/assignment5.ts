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



//---*************Solution Assignment 4********************__--

    // Array of transactions: positive values represent credits, negative values represent debits
        const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

        // Variables to store the count and amount of credits and debits
        let totalCredits: number = 0;
        let totalDebits: number = 0;
        let totalCreditAmount: number = 0;
        let totalDebitAmount: number = 0;
        let suspiciousTransactions: number = 0;

        // Iterate through each transaction in the array
        for (const amount of transactions) {

            if (amount > 0) {
                // Credit transaction
                totalCredits++;
                totalCreditAmount += amount;

                // Check for suspiciously large credit transaction
                if (amount > 10000) {
                    console.log(`Suspicious credit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }

            } else {
                // Debit transaction
                totalDebits++;
                totalDebitAmount -= amount; // convert to positive

                // Check for suspiciously large debit transaction
                if (amount < -10000) {
                    console.log(`Suspicious debit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }
            }
        }

        // Final balance
        const finalBalance: number = totalCreditAmount - totalDebitAmount;

        // Print summary
        console.log("----- Transaction Summary -----");
        console.log("Total number of credit transactions:", totalCredits);
        console.log("Total number of debit transactions:", totalDebits);
        console.log("Total amount credited:", totalCreditAmount);
        console.log("Total amount debited:", totalDebitAmount);
        console.log("Final remaining amount in the account:", finalBalance);
        console.log("Total number of suspicious transactions:", suspiciousTransactions);

        export {};


        //----------------------Solution-Assignment5---------------------

        // Map<employeeName, [baseSalary, experience, rating]>

//Storing employee data (input)
const empData: Map<string, number[]> = new Map();
empData.set("Alice Johnson", [75000, 5, 4.2]);
empData.set("Bob Smith", [68000, 3, 3.8]);
empData.set("Carol Davis", [82000, 7, 4.5]);
empData.set("David Brown", [90000, 10, 2.0]);
empData.set("Eva Green", [60000, 2, 3.5]);


//Create empty Map to store hike percentages
const hikeMap: Map<string, number> = new Map();

// Calculate hike for each employee and store in hikeMap
for (const key of empData.keys()) {
  const data = empData.get(key)!;// get the array of values for the employee
  const baseSalary = data[0];
  const experience = data[1];
  const rating = data[2];

  const hikePercentage = calculateHike(baseSalary, experience, rating);
  hikeMap.set(key, hikePercentage);
}

console.log("Hike Percentage for each employee:");
console.log(hikeMap);


// Function to calculate hike percentage
function calculateHike(
  baseSalary: number,
  experience: number,
  rating: number
): number {
  let variablePayPercentage = 0;
  let bonus = 0;
  let reward = 0;

  if (rating >= 4) {
    variablePayPercentage = 15;
    bonus = 1500;
  } else if (rating >= 3) {
    variablePayPercentage = 10;
    bonus = 1200;
  } else {
    variablePayPercentage = 3;
    bonus = 300;
  }

  if (experience >= 5) {
    reward = 5000;
  }

  const hike =
    (baseSalary * variablePayPercentage) / 100 + bonus + reward;

  return (hike / baseSalary) * 100;
}

export {};
