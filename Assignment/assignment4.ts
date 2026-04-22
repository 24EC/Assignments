// Bank Transactions
// Positive value refers Credit and Negative refers Debit Transaction
// Transactions Amount
// 1 50000
// 2 -2000
// 3 3000
// 4 -15000
// 5 -200
// 6 -300
// 7 4000
// 8 -3000
// First Store all the transactions in any data structure of Your Choice from collections, and by using
// Loops and conditional statements
// 1. Print total number of credit and debit transactions completed
// 2. Print the total amount credited and debited in account
// 3. Print total amount remaining at the end in Bank Account
// 4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions

let TransactionsAmount: number[] = [ 50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let totalCredit = 0;
let totalDebit = 0;

for (let amount of TransactionsAmount) {
        if (amount > 0) {
            totalCredit += amount;
        } else if (amount < 0) {
            totalDebit += Math.abs(amount); // store as positive value
        }
    }
   
    console.log("Bank Transaction Summary:");
    console.log(`Total Credit: ₹${totalCredit}`);
    console.log(`Total Debit: ₹${totalDebit}`);
   