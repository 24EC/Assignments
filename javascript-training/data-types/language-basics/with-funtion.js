// Test Case 1 : verify the home page;
console.log("*************Test Case 1 : verify the home page*************");
launchBrowserandLogin("chrome", "https://www.github.com/")
console.log("Verify the home page is displayed");
logoutAndCloseBrowser();


// Test Case 2 : verify the account banance;
console.log("*************Test Case 2: verify the account banance*************");
launchBrowserandLogin("edge", "https://dev.github.com/")
console.log("Verify the home page is displayed");
console.log("Verify the account statement is displayed as " +accountBalance);
logoutAndCloseBrowser();


// Test Case 3 : verify the account statement;
console.log("*************Test Case 3 : verify the account statement *************");
launchBrowserandLogin("firefox", "https://uat.github.com/");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
logoutAndCloseBrowser();





function launchBrowserandLogin(browserName, url){
console.log("*************Test Case 1 : verify the home page*************");
console.log(`Launch the ${browserName} browser`);
console.log(`Enter the url: ${url}`);
console.log("Enter the username as 'jyoti'  and passwords 'admin123'");
console.log("Click on the login button");
}


function logoutAndCloseBrowser(){
console.log("Logout from the application ");
console.log("Close the browser");
}

function getAccountBalance(){
console.log("Verify the home page is displayed");
let accountBalance =100000;
return accountBalance;
}

//

