const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'networkidle' });
  await page.click('a:has-text("Admin Page")');
  await page.waitForLoadState('networkidle');
  console.log('admin page url', page.url());
  const options = await page.locator('select[name="databaseType"] option').allTextContents();
  console.log('db options', options);
  const radioLabels = await page.locator('input[name="databaseType"]').all();
  console.log('radio count', await page.locator('input[type="radio"]').count());
  const rows = await page.locator('input[type="radio"]').elementHandles();
  for (let i = 0; i < rows.length; i++) {
    const value = await rows[i].getAttribute('value');
    const name = await rows[i].getAttribute('name');
    const visible = await rows[i].isVisible();
    console.log(`radio[${i}] name=${name} value=${value} visible=${visible}`);
  }
  await browser.close();
})();
