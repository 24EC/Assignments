const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/services.htm', { waitUntil: 'networkidle' });
  const tables = await page.locator('table').elementHandles();
  for (let i = 0; i < tables.length; i++) {
    const text = await tables[i].innerText();
    console.log(`table ${i}: ${text.slice(0, 200)}`);
  }
  const bookstoreText = await page.locator('text=Available Bookstore SOAP services:').count();
  console.log('bookstore text count', bookstoreText);
  await browser.close();
})();