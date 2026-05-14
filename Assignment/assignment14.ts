
import{test, expect} from '@playwright/test';
test('ParaBank Application Test - Complete Workflow', async({page}) => {

    // 1. Launch the parabank application
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    
    // 2. Verify application logo is displayed
    
    const logoIcon = page.locator('//img[starts-with(@src,"images/logo")]');
    await expect(logoIcon).toBeVisible();
    console.log('Logo is visible');
   
    // Locate the caption below logo icon
    const captionBelowLogo = await page.locator('//p[starts-with(text(),"Experience ")]')
    
    // 3. Verify application caption displayed as "Experience the difference"
    await expect(captionBelowLogo).toBeVisible();
    const captionText = await captionBelowLogo.textContent();
    expect(captionText).toContain('Experience');
    console.log( 'Caption "Experience the difference" is visible');
    
    // 4. Enter invalid username
    
    const usernameField = page.locator('//input[@name="username"]');
    await usernameField.fill('invaliduser');
    console.log('Invalid username entered');

    // 5. Enter empty Password
    
    const passwordField = page.locator('//input[@type="password"]');
    // Password field remains empty (no fill action)
    console.log('Password field left empty');

    // 6. Click on login button
    
    const loginButton = page.locator('//input[@value="Log In"]');
    await loginButton.click();\
    console.log('Login button clicked');

    // 7. Verify the error message "Please enter a username and password."
    const errorMessage = page.locator('//span[@class="error"]');
    await expect(errorMessage).toBeVisible();
    const errorText = await errorMessage.textContent();
    expect(errorText).toContain('Please enter a username and password');
    console.log('Error message verified: ' + errorText);

    // Clear the username field for next steps
    await usernameField.clear();

    // 8. Click on admin page link
    const adminPageLink = page.locator('ul[class="leftmenu"] > li > a[href="admin.htm"]');
    await adminPageLink.click();
    console.log('Admin page link clicked');

    // 9. Select the option "soap" from dba mode radio button
    const soapRadioButton = page.locator('//input[@value="soap"]');
    await soapRadioButton.click();
    console.log('SOAP radio button selected');

    // 10. Scroll to element dropdown
    const dbTypeDropdown = page.locator('//select[@name="databaseType"]');
    await dbTypeDropdown.scrollIntoViewIfNeeded();
    console.log('Scrolled to dropdown');

    // 11. Select the option web service from the dropdown
    await dbTypeDropdown.selectOption('websphere');
    console.log('Web Service option selected from dropdown');

    // 12. Click on submit button
    const submitButton = page.locator('//input[@value="Submit"]');
    await submitButton.click();
    console.log('Submit button clicked');

    // 13. Verify submission is successful by validating success message
    const successMessage = page.locator('//p[contains(text(),"successfully")]');
    await expect(successMessage).toBeVisible({timeout: 10000});
    console.log('Submission successful message verified');

    // 14. Click on services page link
    const servicesLink = page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');
    await servicesLink.click();
    console.log('Services page link clicked');

    // 15. Wait for service page to load
    await page.waitForSelector('//table[@class="bookservicetable"]', {timeout: 10000});
    console.log('Services page loaded');

    // 16. Scroll down till bookstore services table
    const bookstoreTable = page.locator('//table[@class="bookservicetable"]');
    await bookstoreTable.scrollIntoViewIfNeeded();
    console.log('Scrolled to bookstore services table');

    // 17. Get total rows of bookstore services table
    const tableRows = page.locator('//table[@class="bookservicetable"]//tbody//tr');
    const totalRows = await tableRows.count();
    console.log('Total rows in bookstore services table: ' + totalRows);

    // 18. Get total columns of bookstore services table
    const tableColumns = page.locator('//table[@class="bookservicetable"]//tbody//tr[1]//td');
    const totalColumns = await tableColumns.count();
    console.log('Total columns in bookstore services table: ' + totalColumns);

    // 19. Print table data (row wise and column wise data)
    console.log('\n=== BOOKSTORE SERVICES TABLE DATA ===\n');
    
    for (let i = 1; i <= totalRows; i++) {
        const rowData: string[] = [];
        for (let j = 1; j <= totalColumns; j++) {
            const cellText = await page.locator(`//table[@class="bookservicetable"]//tbody//tr[${i}]//td[${j}]`).textContent();
            rowData.push(cellText?.trim() || '');
        }
        console.log(`Row ${i}: ${rowData.join(' | ')}`);
    }

    console.log('\n All test steps completed successfully!');

});
