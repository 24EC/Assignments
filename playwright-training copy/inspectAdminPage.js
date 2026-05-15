const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.click('a[href="admin.htm"]');
  await page.waitForLoadState('networkidle');
  console.log('URL:' + page.url());
  console.log('TITLE:' + await page.title());
  console.log('HAS SELECT:' + await page.locator('select[name="databaseType"]').count());
  console.log('BODY START:' + (await page.locator('body').innerText()).slice(0,500));
  await browser.close();
})();
