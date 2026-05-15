// Assignment - 2

import { test, expect } from '@playwright/test';

test('DemoQA Application Test - Complete Workflow', async ({ page }) => {
  // 1. Launch the parabank application
  await page.goto('https://demoqa.com/automation-practice-form');

  // 2. Wait for Page-load
  await expect(page.locator('div.practice-form-wrapper')).toBeVisible();

  // 3. Enter First name and Last name
  await page.fill('#firstName', 'First');
  await page.fill('#lastName', 'Last');

  // 4. Enter Email
  await page.fill('#userEmail', 'first.last@example.com');

  // 5. Select Gender (Male)
  await selectGender(page, 'Male');

  // 6. Enter mobile number
  await page.fill('#userNumber', '9876543210');

  // 7. Select DOB (1-Feb-1991)
  const dobInput = page.locator('#dateOfBirthInput');
  await dobInput.click();
  await dobInput.fill('01 Feb 1991');
  await dobInput.press('Enter');

  // 8. Search and Select Computer Science and English
  await page.fill('#subjectsInput', 'Computer Science');
  await page.keyboard.press('Enter');
  await page.fill('#subjectsInput', 'English');
  await page.keyboard.press('Enter');

  // 9. Select Hobbies as Sports and Reading
  await page.locator('label[for="hobbies-checkbox-1"]').click();
  await page.locator('label[for="hobbies-checkbox-2"]').click();

  // 10. Upload photo
  const photoPath = path.join(__dirname, '../typescript-training/oops/image.png');
  await page.setInputFiles('#uploadPicture', photoPath);

  // 11. Submit Details
  await page.click('#submit');
  await expect(page.locator('#example-modal-sizes-title-lg')).toHaveText('Thanks for submitting');
});

async function selectGender(page, mode:Srting){
    const GenderRadioButton = page.Locator('input[type="radio"][value="mode"]');
    await GenderRadioButton.click();
    console.log('Selected gender mode: ${mode}');

}