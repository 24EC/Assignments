const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/index.htm', { waitUntil: 'networkidle' });
  const links = await page.locator('a').all();
  console.log('links count', links.length);
  for (let i = 0; i < links.length; i++) {
    const text = await links[i].innerText();
    const href = await links[i].getAttribute('href');
    const visible = await links[i].isVisible();
    if (text.trim() || href) console.log(`${i}: visible=${visible}, href=${href}, text='${text.trim()}'`);
  }
  await browser.close();
})();
