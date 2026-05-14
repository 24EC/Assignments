const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/admin.htm', { waitUntil: 'networkidle' });
  const selectors = ['input[value="Submit"]', 'button:has-text("Submit")', 'input[type="submit"]'];
  for (const sel of selectors) {
    console.log(sel, await page.locator(sel).count());
  }
  const radioCount = await page.locator('input[type="radio"]').count();
  console.log('radio count', radioCount);
  console.log('radio values', await page.locator('input[type="radio"]').evaluateAll(nodes => nodes.map(n => ({ value: n.value, name: n.name }))))
  console.log('success visible count', await page.locator('text=successfully').count());
  console.log('all buttons count', await page.locator('button,input[type="button"],input[type="submit"]').count());
  await browser.close();
})();
