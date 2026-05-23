import { test, TestInfo } from '@playwright/test';
import { LoginPageSteps } from '../../page-objects/page-steps/login-page-steps.js';
import { HomePageSteps } from '../../page-objects/page-steps/home-page-steps.js';
import { CookiesPageSteps } from '../../page-objects/page-steps/cookies-page-steps.js';
import { SignUpPageSteps } from '../../page-objects/page-steps/sign-up-page-steps.js';
import data from '../../testdata/ui/data.json' with { type: 'json' };

let loginPage: LoginPageSteps;
let homePage: HomePageSteps;
let cookiesPage: CookiesPageSteps;
let signUpPage: SignUpPageSteps;
let testdata:any;

test.describe('Application UI Tests', () => {

    //Initialize the page objects before each and every test case. 
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPageSteps(page);
        homePage = new HomePageSteps(page);
        cookiesPage = new CookiesPageSteps(page);
        signUpPage = new SignUpPageSteps(page);
    });

    //Test Case 1: Verify Cookies popup is displayed. 
    test('Verify Cookies popup is displayed', async () => {
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
    })

    //Test Case 2: Verify Cookies popup content
    test('Verify Cookies popup content', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        //testdata = data["Verify Cookies popup content" as keyof typeof data];
       await loginPage.launchtheApplication();
       await cookiesPage.verifyCookiesPopupisDisplayed();
       await cookiesPage.verifyCookiesPopupContent(testdata.content);
    })
    
    //Test Case 3: Verify Logos displayed in the cookies pop-up 
    test('Verify Logos displayed in the cookies pop-up', async () => {
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupLogo();
    })

    //Test Case 4: Verify switch buttons are displayed in the cookies pop-up
    test('Verify switch buttons are displayed in the cookies pop-up', async () => {
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSwitchButton();
    })

    //Test Case 5: Verify selection buttons are displayed in the cookies pop-up
    test('Verify selection buttons are displayed in the cookies pop-up', async () => {
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
    })

    //Test Case 6: Verify show details link is displayed in the cookies pop-up
    test('Verify show details link is displayed in the cookies pop-up', async () => {
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupShowDetailsLink();
    })

    //Test Case 7: Verify Expanded view of Cookies pop-up
    test('Verify Expanded view of Cookies pop-up', async () => {
      await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupShowDetailsLink();
        await cookiesPage.verifyCookiesPopupShowDetailsLink();
        await cookiesPage.verifyCookiesPopupExpandedDetailsSection();
    })

    //Test Case 8: Verify cookies popup is getting closed after clicking on the Allow All button. 
    test('Verify cookies popup is getting closed', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnAllowSelectionButton(testdata.buttonName);
        await cookiesPage.verifyCookiesPopupIsClosed();
    })

    //Test Case 9: Verify login functionality with valid credentials. 
    test('Verify login with valid credentials', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnAllowSelectionButton(testdata.buttonName);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterBusinessLoginDetails(testdata.username, testdata.password);
        await loginPage.clickOnLoginButton();
        await homePage.verifyHomePageLaunched();
    })

    //Test Case 10: Verify login functionality with invalid credentials.
        test('Verify login with invalid credentials', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnAllowSelectionButton(testdata.buttonName);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterBusinessLoginDetails(testdata.username, testdata.password);
        await loginPage.clickOnLoginButton();
        await loginPage.verifyErrorMessageIsDisplayed(testdata.expectedErrorMsg);
    }) 
    
    //Test Case 11: Verify forgot password functionality. 
    test('Verify forgot password functionality', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchtheApplication(); 
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnAllowSelectionButton(testdata.buttonName);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterBusinessLoginDetails(testdata.username);
        await loginPage.clickOnForgotPasswordLink();
        await loginPage.verifyForgotPasswordConfirmationPageIsDisplayed();
    })
    //Test Case 12: Verify sign-up link and social media icons are displayed within the login page. 
    test('Verify sign-up link and social media icons are displayed within the login page', async () => {

        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnAllowSelectionButton("Allow All");
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.verifySignUpLinkIsDisplayed();
        await loginPage.verifySocialMediaIconsAreDisplayed();
    })

    //Test Case 13: Verify adding a new user within the creation CRM application. 
    test('Verify adding a new user', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnAllowSelectionButton(testdata.buttonName);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterBusinessLoginDetails(testdata.username, testdata.password);
        await loginPage.clickOnLoginButton();
        await homePage.verifyHomePageLaunched();
        await homePage.clickUsersLink();
        await homePage.verifyAddUserButtonDisplayed();
        await homePage.clickAddUserButton();
        await homePage.verifyNewUserScreenDisplayed();
        await homePage.enterEmailAddress(testdata.newUserEmail);
        await homePage.selectRole(testdata.newUserRole);
        await homePage.clickInviteButton();
        await homePage.verifyInvitationSentToastMessageDisplayed();
    })

    //Test Case 14: Verify logout functionality.
    test('Verify logout functionality', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];   
        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons(); 
        await cookiesPage.clickOnAllowSelectionButton(testdata.buttonName);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.enterBusinessLoginDetails(testdata.username, testdata.password);
        await loginPage.clickOnLoginButton();
        await homePage.verifyHomePageLaunched();
        await homePage.clickProfileIcon();
        await homePage.clickLogoutLink();
        await loginPage.verifyLoginPageIsDisplayed();
    })

    //Test case 15: Verify that user is able to sign up successfully.
    test('Verify user sign-up functionality', async ({}, testInfo: TestInfo) => {
        testdata = data[testInfo.title as keyof typeof data];

        await loginPage.launchtheApplication();
        await cookiesPage.verifyCookiesPopupisDisplayed();
        await cookiesPage.verifyCookiesPopupSelectionButtons();
        await cookiesPage.clickOnAllowSelectionButton(testdata.buttonName);
        await cookiesPage.verifyCookiesPopupIsClosed();
        await loginPage.verifyLoginPageIsDisplayed();
        await loginPage.clickOnSignUpLink();
        await loginPage.verifySignUpLinkIsDisplayed();
        await signUpPage.enterBusinessSignUpDetails(testdata.signUpEmail, testdata.signUpPassword);
        await signUpPage.clickOnContinueWithGoogleButton() 
        await signUpPage.enterPersonalSignUpDetails(testdata.firstName, testdata.lastName, testdata.Company, testdata.Website);
        await signUpPage.selectCountry(testdata.country);
        await signUpPage.enterPhoneNumber(testdata.phone);
        await signUpPage.clickOnSignUpButton();
        await signUpPage.verifySignUpSuccessMessage(testdata.expectedSuccessMsg);
    });
});
