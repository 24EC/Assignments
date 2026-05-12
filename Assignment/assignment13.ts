
import{test, expect} from '@playwright/test';
test('css Selector', async({page}) => {

    //Launch the parabank application;
    await page.goto('https://parabank.parasoft.com/');


    // Locate the admin icon
    await page.locator('//img[starts-with(@src,"images/clear")]');

    // Locate the logo icon
    await page.locator('//img[starts-with(@src,"images/logo")]');

     // Locate the caption below logo icon
    await page.locator('//p[starts-with(text(),"Experience ")]');

     // Locate the Solutions hyperlink
    await page.locator('//li[contains(text(),"Solutions")]');

    // Locate the About Us hyperlink
      await page.locator('ul[class="leftmenu"] > li > a[href="about.htm"]');

    //Locate the Services hyperlink 
      await page.locator('ul[class="leftmenu"] > li > a[href="services.htm"]');

    //Locate the Products hyperlink
      await page.locator('ul[class="leftmenu"] > li > a[href$="products.jsp"]');

    //Locate the Locations hyperlink
      await page.locator('ul[class="leftmenu"] > li > a[href$="contacts.jsp"]');

    //Locate the Admin Page hyperlink
      await page.locator('ul[class="leftmenu"] > li > a[href="admin.htm"]');

    //Locate the Customer Login captions
      await page.locator('//h2[text()="Customer Login"]');

    //Locate the username captions
      await page.locator('//b[text()="Username"]');

    //Locate the username textfield
      await page.locator('//input[@name="username"]');

    //Locate the password captions
      await page.locator('//b[text()="Password"]');

    //Locate the password textfield
      await page.locator('//input[@type="password"]');
      
    //Locate the Login button
      await page.locator('//input[@type="submit"]');
      await page.locator('//input[@value="Log In"]');

    //Locate the Forget login info hyperlink
    await page.locator('//a[text()="Forgot login info?"]');

    //Locate the Register hyperlink
    await page.locator('//a[text()="Register"]');

    //Locate the home icon
    await page.locator('//a[text()="home"]');

    //Locate the aboutus icon
    await page.locator('//a[text()="about"]');

    //Locate the contact icon
    await page.locator('//a[text()="contact"]');

    //Locate the headerPanel banner image
    await page.locator('//div[contains(@style, "images/header-main.jpg")]');

    //Locate the ATM Services image
   // await page.locator('//span[class="services"]');

    //Locate the ATM Services hyperlink
    await page.locator('//li[text()="ATM Services"]');

    //Locate the Withdraw Funds hyperlink
    await page.locator('//a[text()="Withdraw Funds"]');

    //Locate the Transfer Funds hyperink
    await page.locator('//ul[@class="services"]//a[text()="Transfer Funds"]');

    //Locate the Check Balances hyperink
    await page.locator('//a[text()="Check Balances"]');

    //Locate the Make Deposits hyperink
    await page.locator('//a[text()="Make Deposits"]');

    //Locate the Online Services hyperink
    await page.locator('//li[text()="Online Services"]');

    //Locate the Bill Pay hyperink
    await page.locator('//a[text()="Bill Pay"]');
    
    //Locate the Account History hyperink
    await page.locator('//a[text()="Account History"]');

    //Locate the Transfer Funds hyperink
    await page.locator('//ul[@class="servicestwo"]//a[text()="Transfer Funds"]');

    //Locate the Read More Services hyperink
    await page.locator('//a[@href="services.htm"][text()="Read More"]');
    
    //Locate the event  hyperink
    await page.locator('//li[@class="captionthree"]');

    //Locate the ParaBank Is Now Re-Opened hyperink
    await page.locator('//a[text()="ParaBank Is Now Re-Opened"]');
    
    //Locate the ParaBank Is Now Re-Opened hyperink
    await page.locator('//a[text()="New! Online Bill Pay"]');

    //Locate the ParaBank Is Now Re-Opened hyperink
    await page.locator('//a[text()="New! Online Account Transfers"]');

    //Locate the Read More Services hyperink
    await page.locator('//a[@href="news.htm"][text()="Read More"]');

    
    //Locate the footer home hyperink
    await page.locator('//a[text()="Home"]');
    
    //Locate the footer about us hyperink
    await page.locator('//div[@id="footerPanel"]//ul//li//a[@href="about.htm"]');
    
    //Locate the footer services hyperink
    await page.locator('//div[@id="footerPanel"]//ul//li//a[@href="services.htm"]');
    
    //Locate the footer home Products hyperink
    await page.locator('//div[@id="footerPanel"]//ul//li//a[text()="Products"]');
    
    //Locate the Footer Locations hyperink
    await page.locator('//div[@id="footerPanel"]//ul//li//a[text()="Locations"]');

    //Locate the Footer Forum hyperink
    await page.locator('//div[@id="footerPanel"]//ul//li//a[text()="Forum"]');
    
    //Locate the Footer Site Map hyperink
    await page.locator('//div[@id="footerPanel"]//ul//li//a[text()="Site Map"]');
    
    //Locate the Footer Contact Us hyperink
    await page.locator('//div[@id="footerPanel"]//ul//li//a[text()="Contact Us"]');
    
    //Locate the Footer copyright hyperink
    await page.locator('//p[@class="copyright"]');

    //Locate the Footer Visit us at: text
    await page.locator('//li[text()="Visit us at:"]');
    
    //Locate the Footer Visit us hyperink
    await page.locator('//a[text()="www.parasoft.com"]');










});