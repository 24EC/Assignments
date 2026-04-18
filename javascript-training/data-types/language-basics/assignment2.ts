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
function checkLoanEligibility(person: LoanApplication): string 
{
     // If the credit score is above 750, the loan is automatically approved.
     if(person.creditScore > 750)
     {
          return "Automatically Approved";
     }
     // If the credit score is between 650 and 750, additional checks are performed.
     else if(person.creditScore >= 650 && person.creditScore <= 750)
     {
          return "Additional Checks Performed";
     }
     // If the credit score is below 650, the loan is denined.
     else
     {
          return "Denied";
     };

     // For credit scores between 650 and 750, the customer’s income must be at least $50,000
     // for the loan to be considered.
     if (person.income < 50000) 
          {
               return "Loan Denied: Income is less than $50,000.";
          }
     
     // If the customer’s income is at least 50,000, the system checks whether the customer is employed.
     // If the customer is unemployed, the loan is denied.
     if (!person.isEmployed) 
          {
               return "Loan Denied: Person is unemployed.";
          }
          else {
               return "Loan Approved: Person is employed.";
          }

     //  If the customer is employed, the system checks the debt-to-income (DTI) ratio.
     //  If the DTI ratio is less than 40%, the loan is approved.
     //  If the DTI ratio is 40% or greater, the loan is denied.
     if (person.debtToIncomeRatio >= 0.40) 
          {
                return "Loan Denied: DTI ratio is 40% or higher.";
          }
          else{
               return "Loan Approved: DTI ratio is less then 40%.";
          }
          
    return "Loan Approved: All conditions met.";
}



// Create common function and then based on below details, print whether user is eligible to get the loan
// or not
// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;

let personInfo1: LoanApplication={
     customerName: "John Doe",
     creditScore: 720,
     income: 55000.0,
     isEmployed: true,
     debtToIncomeRatio: 35.0
};

let personInfo2: LoanApplication={
     customerName: "Doe",
     creditScore: 720,
     income: 45000.0,
     isEmployed: true,
     debtToIncomeRatio: 35.0
};
const personInfo3: LoanApplication={
     customerName: "John",
     creditScore: 720,
     income: 55000.0,
     isEmployed: true,
     debtToIncomeRatio: 65.0
};

let personInfo4: LoanApplication={
     customerName: "Bharath",
     creditScore: 720,
     income: 55000.0,
     isEmployed: false,
     debtToIncomeRatio: 20.0
};

let personInfo5: LoanApplication={
     customerName: "Jyoti",
     creditScore: 980,
     income: 9855000.0,
     isEmployed: true,
     debtToIncomeRatio: 2.0
};

let personInfo6: LoanApplication={
     customerName: "Monika",
     creditScore: 280,
     income: 35000.0,
     isEmployed: false,
     debtToIncomeRatio: 80.0
};

console.log("Customer 1:", checkLoanEligibility(personInfo1)); 

console.log("Customer 2:", checkLoanEligibility(personInfo2)); 

console.log("Customer 3:", checkLoanEligibility(personInfo3)); 

console.log("Customer 4:", checkLoanEligibility(personInfo4)); 

console.log("Customer 5:", checkLoanEligibility(personInfo5)); 

console.log("Customer 5:", checkLoanEligibility(personInfo6)); 


