const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'networkidle' });
  console.log('TITLE', await page.title());
  console.log('logo count', await page.locator('img[src^="images/logo"]').count());
  console.log('caption count', await page.locator('p', { hasText: 'Experience the difference' }).count());
  await page.fill('input[name="username"]', 'invaliduser');
  await page.click('input[value="Log In"]');
  await page.waitForTimeout(1000);
  console.log('error count', await page.locator('text=Please enter a username and password').count());
  await page.click('a[href="admin.htm"]');
  await page.waitForLoadState('networkidle');
  console.log('options', await page.locator('select[name="databaseType"] option').allTextContents());
  await browser.close();
})();
