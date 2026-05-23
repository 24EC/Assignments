import { Page } from '@playwright/test';
 import  cookiesPage  from '../page-elements/cookies-page-element.json' with  {type: 'json'};
 import { WebCommons } from '../../commons/ui/web-commons.js'

 export class CookiesPageSteps {
    page : Page;
    web: WebCommons;

     constructor(page:Page) {
         this.page = page;
         this.web = new WebCommons(page);
     }
    //Method to verify cookies popup is displayed
     async  verifyCookiesPopupisDisplayed() {
        await this.web.isElementVisible(cookiesPage.cookiesDialogHeader);
     }

     //Method to verify cookies popup content
     async  verifyCookiesPopupContent(expContent: string) {
        await this.web.isElementVisible(cookiesPage.cookiesDialogContent);
        const actualContent = await this.web.getElementText(cookiesPage.cookiesDialogContent);
        await this.web.compareText(actualContent, expContent);

     }

      //Method to verify the logo displayed in cookies popup
      async  verifyCookiesPopupLogo() {  
         await this.web.isElementVisible(cookiesPage.creatioLogo);
         await this.web.isElementVisible(cookiesPage.cookiebotLogo);  
      }

      //Method to verify swtich button is displayed in cookies popup
      async  verifyCookiesPopupSwitchButton() {
         await this.web.isElementVisible(cookiesPage.necessarySwitchButton);  
         await this.web.isElementVisible(cookiesPage.preferencesSwitchButton);
         await this.web.isElementVisible(cookiesPage.statisticsSwitchButton);
         await this.web.isElementVisible(cookiesPage.marketingSwitchButton);
      }  

      //Method to verify selection  buttons displayed on the cookies popup
         async  verifyCookiesPopupSelectionButtons() {
         await this.web.isElementVisible(cookiesPage.allowAllButton);
         await this.web.isElementVisible(cookiesPage.allowSelectionButton);
         await this.web.isElementVisible(cookiesPage.denyButton);
      }

   
      //Method to verify show details link is displayed in cookies popup
      async  verifyCookiesPopupShowDetailsLink() {
         await this.web.isElementVisible(cookiesPage.showDetailsLink);  
      }  

      //Method to verify expanded details section is displayed in cookies popup
      async  verifyCookiesPopupExpandedDetailsSection() {
         await this.web.isElementVisible(cookiesPage.cookiePopupExpandedViewConsent);  
      }

      // Method to click on selection button in cookies popup
      async clickOnAllowSelectionButton(buttonName :string) {
         switch(buttonName.toLowerCase()) {
            case 'allow all':
               await this.web.clickElement(cookiesPage.allowAllButton);    
               break;
            case 'allow selection':
               await this.web.clickElement(cookiesPage.allowSelectionButton);          
               break;
            case 'deny':
               await this.web.clickElement(cookiesPage.denyButton);
               break;
            default:
               throw new Error(`Invalid button name: ${buttonName}`);
         }
            
      }

      //Method to verify that cookies popup is closed after selection
      async verifyCookiesPopupIsClosed() {
         await this.web.isElementDisappeared(cookiesPage.cookiesDialogHeader);
      }  

   


   }