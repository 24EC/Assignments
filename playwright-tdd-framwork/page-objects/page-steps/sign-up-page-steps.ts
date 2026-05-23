import { Page } from '@playwright/test';
import  signUpPage  from '../page-elements/sign-up-page-element.json' with  {type: 'json'};
import { WebCommons } from '../../commons/ui/web-commons.js'
import config from '../../config/config.json' with { type: 'json' };

 export class SignUpPageSteps {
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

    // Method to verify sign-up page is successfully displayed after clicking on sign-up link in login page
    async  verifySignUpPageIsDisplayed() {
        await this.web.isElementVisible(signUpPage.signUpPageTitle);
    }

    //Method to enter Business email and password in sign-up page
    async  enterBusinessSignUpDetails(email: string, password?: string) {
        await this.web.enterText(signUpPage.signUpBusinessEmailInput, email);   
        if(password) {
            await this.web.enterText(signUpPage.signUpPasswordInput, password);
        }
    }

    //Method to click on Continue with Google button in sign-up page
    async clickOnContinueWithGoogleButton() {
        await this.web.clickElement(signUpPage.ContinueButton);
    }

    //Method to enter First name, Last name, Company, Website, Country, and Phone in sign-up page
    async enterPersonalSignUpDetails(firstName: string, lastName: string, Company: string, Website: string) {

       await this.web.enterText(signUpPage.signUpFirstNameInput, firstName);
       await this.web.enterText(signUpPage.signUpLastNameInput, lastName);
       await this.web.enterText(signUpPage.CompanyInput, Company);
       await this.web.enterText(signUpPage.WebsiteInput, Website);
    }

    //Method to select country in sign-up page
    async selectCountry(country: string) {
        await this.web.selectOption(signUpPage.CountryDropdown, country);
    }
    
    //Method to enter phone number in sign-up page
    async enterPhoneNumber(phone: string) {
        await this.web.enterText(signUpPage.PhoneInput, phone);
    }
    

    //Method to click on sign-up button in sign-up page
    async clickOnSignUpButton() {
        await this.web.clickElement(signUpPage.SignUpButton);
    }

    //Method to verify sign-up success message after successful sign-up
    async verifySignUpSuccessMessage(expectedMessage: string) {
        await this.web.isElementVisible(signUpPage.SignUpSuccessMessage);
    }
}

