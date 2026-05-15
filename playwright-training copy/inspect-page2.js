const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'networkidle' });
  console.log('TITLE', await page.title());

  const adminLinks = await page.locator('a[href="admin.htm"]').elementHandles();
  console.log('admin href count', adminLinks.length);
  for (let i = 0; i < adminLinks.length; ++i) {
    const visible = await adminLinks[i].isVisible();
    const text = await adminLinks[i].innerText();
    console.log(`admin[${i}] visible=${visible}, text=${text}`);
  }

  await page.fill('input[name="username"]', 'invaliduser');
  await page.click('input[value="Log In"]');
  await page.waitForTimeout(1000);
  const errorEls = await page.locator('text=Please enter a username and password.').elementHandles();
  console.log('error exact count', errorEls.length);
  const errorEls2 = await page.locator('text=Please enter a username and password').elementHandles();
  console.log('error partial count', errorEls2.length);
  if (errorEls2.length) {
    console.log('error text content:', await errorEls2[0].innerText());
  }

  const options = await page.locator('select[name="databaseType"] option').allTextContents();
  console.log('options', options);
  await browser.close();
})();
