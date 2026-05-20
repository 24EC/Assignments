
//  Assignment 3

import { test, expect } from '@playwright/test';
test('DemoQA Alerts Test', async ({ page }) => {

    //1. Enter URL and Launch the application (https://demoqa.com/alerts)
    await page.goto('https://demoqa.com/alerts');
    console.log('1. Launch the alerts application');


    // 2. Locate Alert buttons to trigger the alerts
    const informationAlert = await page.locator('#alertButton');
    const confirmationAlert = await page.locator('#confirmButton');
    const promptAlert = await page.locator('#promtButton');

    await informationAlert.click();
    console.log('3. Clicked information alert button');

    // 3. Click on the information alert and copy the alert message and then select OK button

    page.once('dialog', async dialog => {
         console.log('2. Information alert message:', dialog.message());
         await dialog.accept();
         console.log('3. Information alert accepted');
         await page.click('#confirmButton');

    });

    // 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
    await page.click('#confirmButton');
    console.log('4. Clicked confirmation alert button');

    // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
    await page.click('#promtButton');
    console.log('5. Clicked prompt alert button');
});
