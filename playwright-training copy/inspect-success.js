const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://parabank.parasoft.com/parabank/admin.htm', { waitUntil: 'networkidle' });
  await page.check('input[value="soap"]');
  await page.selectOption('select[name="loanProvider"]', { label: 'Web Service' });
  await page.click('input[value="Submit"]');
  await page.waitForLoadState('networkidle');
  const handles = await page.locator('text=Settings saved successfully.').elementHandles();
  console.log('handles', handles.length);
  for (let i = 0; i < handles.length; ++i) {
    console.log('outerHTML', await handles[i].evaluate(node => node.outerHTML));
    console.log('tagName', await handles[i].evaluate(node => node.tagName));
    console.log('text', await handles[i].evaluate(node => node.textContent));
  }
  await browser.close();
})();
