const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/services.htm', { waitUntil: 'networkidle' });
  console.log('title', await page.title());
  const h1s = await page.locator('h1').allTextContents();
  console.log('h1s', h1s);
  const tables = await page.locator('table').count();
  console.log('tables', tables);
  const tableClasses = await page.locator('table').evaluateAll(nodes => nodes.map(n => n.className));
  console.log('table classes', tableClasses);
  const bodyText = await page.locator('body').innerText();
  console.log('body start', bodyText.slice(0, 500));
  await browser.close();
})();