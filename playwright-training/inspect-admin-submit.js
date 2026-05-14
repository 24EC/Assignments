const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/admin.htm', { waitUntil: 'networkidle' });
  await page.check('input[value="soap"]');
  await page.selectOption('select[name="loanProvider"]', { label: 'Web Service' });
  await page.click('input[value="Submit"]');
  await page.waitForLoadState('networkidle');
  console.log('url after submit', page.url());
  console.log('success count', await page.locator('text=successfully').count());
  const bodyText = await page.locator('body').innerText();
  console.log(bodyText.slice(0, 300));
  await browser.close();
})();
