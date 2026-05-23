import { Page } from '@playwright/test';
import  loginPage  from '../page-elements/login-page-element.json' with  {type: 'json'};
import { WebCommons } from '../../commons/ui/web-commons.js'
import config from '../../config/config.json' with { type: 'json' };

 export class LoginPageSteps {
    page : Page;
    web: WebCommons;

 constructor(page:Page) {
         this.page = page;
         this.web = new WebCommons(page);
     }

    //Method to Launch the Application 
    async launchtheApplication(): Promise<void> {
        await this.web.launchApplication(config.app.url,config.app.title);
    }
    
    // Method to verify login page is successfully displayed after closing the cookies popup
        async  verifyLoginPageIsDisplayed() {
            await this.web.isElementVisible(loginPage.loginPageHeader);
        }

    //Method to enter Business email and password in login page
        async  enterBusinessLoginDetails(email: string, password?: string) {
            await this.web.enterText(loginPage.businessEmailTextBox, email);
            if(password) {
            await this.web.enterText(loginPage.passwordTextBox, password);

        }
    }

    //Method to click on login button in login page
        async clickOnLoginButton() {
            await this.web.clickElement(loginPage.loginButton);
        }   

    //Method to verifythe forget password link is displayed in login page
        async verifyForgotPasswordLinkIsDisplayed() {
            await this.web.isElementVisible(loginPage.forgotPasswordLink);
        }   
    //Method to click on forget password link in login page
        async clickOnForgotPasswordLink() {
            await this.web.clickElement(loginPage.forgotPasswordLink);
        }
        
    //Method to verify forget password confirmation page is displayed after clicking on forget password link

        async verifyForgotPasswordConfirmationPageIsDisplayed() {
            await this.web.isElementVisible(loginPage.forgotPasswordConfirmationMsg);
        }

    //Method to verify sign-up link is displayed in login page
        async verifySignUpLinkIsDisplayed() {
            await this.web.isElementVisible(loginPage.signUpLink);
        }   
        
    //Method to click on sign-up link in login page
        async clickOnSignUpLink() {
            await this.web.clickElement(loginPage.signUpLink);
        }   

    //Method to verify social media icons are displayed in login page
        async verifySocialMediaIconsAreDisplayed() {
            await this.web.isElementVisible(loginPage.googleIcon);
            await this.web.isElementVisible(loginPage.linkedInIcon);
        }   


    //Method to verify error message is displayed when user enters invalid credentials
        async verifyErrorMessageIsDisplayed(expectedErrorMsg: string) {
            await this.web.isElementVisible(loginPage.loginErrorMessage);
        }

    

}
