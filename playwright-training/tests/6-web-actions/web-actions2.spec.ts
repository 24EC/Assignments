// Assignment - 2

import { test, expect } from '@playwright/test';

test('DemoQA Application Test - Complete Workflow', async ({ page }) => {
  // 1. Launch the DemoQA application
  await page.goto('https://demoqa.com/automation-practice-form');
  console.log('1. Launch the DemoQA application');

  // 2. Wait for Page-load
  await expect(page.locator('div.practice-form-wrapper')).toBeVisible();
  console.log('2. Page-loaded');

  // 3. Enter First name and Last name
  await page.fill('#firstName', 'First');
  console.log('3. Enter First name');
  await page.fill('#lastName', 'Last');
  console.log('3. Enter Last name');

  // 4. Enter Email
  await page.fill('#userEmail', 'first.last@example.com');
  console.log('4. Enter email');

  // 5. Select Gender (Male)
  await selectGender(page, 'Male');
  console.log('5. Gender selected');

  // 6. Enter mobile number
  await page.fill('#userNumber', '9876543210');
  console.log('6. Enter mobile number');

  // 7. Select DOB (1-Feb-1991)
  const dobInput = page.locator('#dateOfBirthInput');
  await dobInput.click();
  await dobInput.fill('01 Feb 1991');
  await dobInput.press('Enter');
  console.log('7. DOB selected');


  // 8. Search and Select Computer Science and English
  await page.fill('#subjectsInput', 'Computer Science');
  await page.keyboard.press('Enter');
  await page.fill('#subjectsInput', 'English');
  await page.keyboard.press('Enter');
  console.log('8. Subjects selected');

  // 9. Select Hobbies as Sports and Reading
  await selectHobbies(page, '1');
  console.log('9. Sports Hobbies selected');
  await selectHobbies(page, '2');
  console.log('9. Reading Hobbies selected');


  // 10. Upload photo
  
  const fileInput = page.locator('input[id="uploadPicture"]');
  await fileInput.setInputFiles('C:\\Users\\Jyoti Srivastava\\OneDrive\\Desktop\\Capture.PNG');
  console.log('10. Photo uploaded');

  // 11. Submit Details
  await page.click('#submit');
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting the form');
  console.log('11. Form submitted and verified');

});

test('DemoQA Alerts Test', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  console.log('1. Launch the alerts application');

  let dialogCount = 0;
  page.on('dialog', async dialog => {
    dialogCount++;
    console.log(`Alert ${dialogCount} message:`, dialog.message());
    if (dialogCount === 1) {
      await dialog.accept();
      console.log('3. Information alert accepted');
    } else if (dialogCount === 2) {
      await dialog.dismiss();
      console.log('4. Confirmation alert dismissed');
    } else if (dialogCount === 3) {
      await dialog.accept('Test text');
      console.log('5. Prompt alert accepted with text');
    }
  });

  await page.click('#alertButton');
  console.log('3. Clicked information alert button');

  await page.click('#confirmButton');
  console.log('4. Clicked confirmation alert button');

  await page.click('#promtButton');
  console.log('5. Clicked prompt alert button');
});

async function selectGender(page: any, mode: string) {
    const GenderRadioButton = page.locator(`input[type="radio"][value="${mode}"]`);
    await GenderRadioButton.check();
    console.log(`5. Selected gender mode: ${mode}`);
}

async function selectHobbies(page: any, mode1: string) {
    const HobbiesCheckbox = page.locator(`input[type="checkbox"][value="${mode1}"]`);
    await HobbiesCheckbox.check();
    console.log(`9. Selected hobbies: ${mode1}`);
}
