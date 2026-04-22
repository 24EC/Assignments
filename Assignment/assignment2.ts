// Assignment-2 (Conditional Statements)
// A bank evaluates loan applicants based on the following criteria:

// 1. Credit Score:
// 2. Income:
// 3. Employment Status:
// 4. Debt-to-Income Ratio:
interface LoanApplication {
     customerName: String
     creditScore: number;
     income: number;
     isEmployed: boolean;
     debtToIncomeRatio: number;
}
function checkLoanEligibility(person: LoanApplication): string {
     // If the credit score is above 750, the loan is automatically approved.
     // For credit scores between 650 and 750, the customer’s income must be at least $50,000
     // If the customer’s income is at least 50,000, the system checks whether the customer is employed.
     //  If the customer is employed, the system checks the debt-to-income (DTI) ratio.
     //  If the DTI ratio is less than 40%, the loan is approved.

     if (person.creditScore > 750 && person.income > 50000 && person.isEmployed == true && person.debtToIncomeRatio < 40) {
          return "Loan Approved: Excellent Credit";
     }
     // If the credit score is between 650 and 750, additional checks are performed.
     else if (person.creditScore >= 650 && person.creditScore <= 750) {
          return "Additional Checks Performed";
     }

     // If the credit score is below 650, the loan is denined.
     else {
          // for the loan to be considered.
          if (person.income < 50000) {
               return "Loan Denied: Income is less than $50,000.";
          }
          // If the customer is unemployed, the loan is denied.
          else if (!person.isEmployed) {
               return "Loan Denied: Person is unemployed.";
          }
          //  If the DTI ratio is 40% or greater, the loan is denied.
          else if (person.debtToIncomeRatio >= 0.40) {
               return "Loan Denied: DTI ratio is 40% or higher.";
          }
          else {
               return "Loan Approved: Meets all requirements.";
          }

     }

}



// Create common function and then based on below details, print whether user is eligible to get the loan or not
// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;

let personInfo1: LoanApplication = {
     customerName: "John Doe",
     creditScore: 720,
     income: 55000.0,
     isEmployed: true,
     debtToIncomeRatio: 35.0
};

console.log("Customer 1:", checkLoanEligibility(personInfo1)); // return "Additional Checks Performed";

let personInfo2: LoanApplication = {
     customerName: "Doe",
     creditScore: 780,
     income: 45000.0,
     isEmployed: true,
     debtToIncomeRatio: 35.0
};

console.log("Customer 2:", checkLoanEligibility(personInfo2)); //"Loan Denied: Income is less than $50,000.

let personInfo3: LoanApplication = {
     customerName: "John",
     creditScore: 755,
     income: 55000.0,
     isEmployed: false,
     debtToIncomeRatio: 15.0
};

console.log("Customer 3:", checkLoanEligibility(personInfo3)); //Loan Denied: Person is unemployed.

let personInfo4: LoanApplication = {
     customerName: "Bharath",
     creditScore: 760,
     income: 55000.0,
     isEmployed: true,
     debtToIncomeRatio: 50.0
};

console.log("Customer 4:", checkLoanEligibility(personInfo4)); //Loan Denied: DTI ratio is 40% or higher.

let personInfo5: LoanApplication = {
     customerName: "Jyoti",
     creditScore: 980,
     income: 985000.0,
     isEmployed: true,
     debtToIncomeRatio: 20.0
};

console.log("Customer 5:", checkLoanEligibility(personInfo5));//"Automatically Approved";

let personInfo6: LoanApplication = {
     customerName: "Monika",
     creditScore: 280,
     income: 35000.0,
     isEmployed: false,
     debtToIncomeRatio: 80.0
};

console.log("Customer 6:", checkLoanEligibility(personInfo6)); //Denied


