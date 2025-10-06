import LoginPage from "../pageObjects/LoginPage";
import Navigation from "../pageObjects/Navigation";

describe("Navigation tests", () => {
    it("should navigate to saucedemo page", () => {
        Navigation.goToLoginPage();
        Navigation.verifyUrlContains("saucedemo.com");
        LoginPage.verifyLoginPageTitle('Swag Labs');
        LoginPage.verifyLoginPageLogo('Swag Labs');
        LoginPage.verifyLoginPageTitleVisibility();
    });
});
