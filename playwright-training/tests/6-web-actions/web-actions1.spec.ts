
import{test, expect} from '@playwright/test';
test('ParaBank Application Test - Complete Workflow', async({page}) => {

    // 1. Launch the parabank application
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    console.log('1. Launch the parabank application');
    
    // 2. Verify application logo is displayed
    
    const logoIcon = page.locator('//img[starts-with(@src,"images/logo")]');
    await expect(logoIcon).toBeVisible();
    console.log('2. Logo is visible');
   
    // 3. Verify application caption displayed as "Experience the difference"
    const captionBelowLogo = await page.locator('//p[starts-with(text(),"Experience ")]')
    await expect(captionBelowLogo).toHaveText("Experience the difference");
    console.log( '3. Caption "Experience the difference" is visible');
    
    // 4. Enter invalid username
    
    const usernameField = await page.locator('//input[@name="username"]');
    await usernameField.fill('invaliduser');
    console.log('4.Invalid username entered');

    // 5. Enter empty Password
    
    const passwordField = await page.locator('//input[@type="password"]');
    // Password field remains empty (no fill action) or
    //await usernameField.fill(' ');
    console.log('5. Password field left empty');

    // 6. Click on login button
    
    const loginButton = await page.locator('//input[@value="Log In"]');
    await loginButton.click();
    console.log('6.Login button clicked');

    // 7. Verify the error message "Please enter a username and password."
    const errorMessage = page.locator('text=/Please enter a username and password\\.?/');
    await expect(errorMessage).toBeVisible();
    const errorText = await errorMessage.textContent();
    expect(errorText).toContain('Please enter a username and password');
    console.log('7. Error message verified: ' + errorText);

    // Clear the username field for next steps
    await usernameField.clear();

    // 8. Click on admin page link
    const adminPageLink = page.getByRole('link', { name: /Admin Page/i });
    await adminPageLink.click();
    console.log('8. Admin page link clicked');

    // 9. Select the option "soap" from dba mode radio button
    await page.check('input[value="soap"]');
    console.log('9. SOAP radio button selected');

    // 10. Scroll to element dropdown
    const dbTypeDropdown = page.locator('select[name="loanProvider"]');
    await dbTypeDropdown.scrollIntoViewIfNeeded();
    console.log('10. Scrolled to dropdown');

    // 11. Select the option web service from the dropdown
    await dbTypeDropdown.selectOption({ label: 'Web Service' });
    console.log('11. Web Service option selected from dropdown');

    // 12. Click on submit button
    const submitButton = page.locator('//input[@value="Submit"]');
    await submitButton.click();
    console.log('12. Submit button clicked');

    // 13. Verify submission is successful by validating success message
    const successMessage = page.locator('text=Settings saved successfully.');
    await expect(successMessage).toBeVisible({ timeout: 10000 });
    console.log('13. Submission successful message verified');

    // 14. Click on services page link
    const servicesLink = page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');
    await servicesLink.click();
    console.log('14. Services page link clicked');

    // 15. Wait for service page to load
    const bookStoreServiceHeader = page.locator('text=Available Bookstore SOAP services:');
    await expect(bookStoreServiceHeader).toBeVisible();
    console.log('15. Services page loaded');

    // 16. Scroll down till bookstore services table
    const bookstoreTable = page.locator('table').nth(1);
    await bookstoreTable.scrollIntoViewIfNeeded();
    console.log('16. Scrolled to bookstore services table');

    // 17. Get total rows of bookstore services table
    const tableRows = page.locator('table').nth(1).locator('tbody tr');
    const totalRows = await tableRows.count();
    console.log('17. Total rows in bookstore services table: ' + totalRows);

    // 18. Get total columns of bookstore services table
    const tableColumns = page.locator('table').nth(1).locator('tbody tr').first().locator('td');
    const totalColumns = await tableColumns.count();
    console.log('18. Total columns in bookstore services table: ' + totalColumns);

    // 19. Print table data (row wise and column wise data)
    console.log('19.\n=== BOOKSTORE SERVICES TABLE DATA ===\n');
    
    for (let i = 1; i <= totalRows; i++) {
        const rowData: string[] = [];
        for (let j = 1; j <= totalColumns; j++) {
            const cellText = await page.locator('table').nth(1).locator(`tbody tr:nth-child(${i}) td:nth-child(${j})`).textContent();
            rowData.push(cellText?.trim() || '');
        }
        console.log(`Row ${i}: ${rowData.join(' | ')}`);
    }

    console.log('\n All test steps completed successfully!');

});

