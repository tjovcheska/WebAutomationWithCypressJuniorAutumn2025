import LoginPage from "../pageObjects/LoginPage";
import Navigation from "../pageObjects/Navigation";

describe("Login tests with fixture data", () => {
    const testCases = [
        { username: "standard_user", password: "secret_sauce", shouldBeLoggedIn: true },
        { username: "locked_out_user", password: "secret_sauce", shouldBeLoggedIn: false },
        { username: "problem_user", password: "secret_sauce", shouldBeLoggedIn: true }
    ];

    beforeEach(() => {
        Navigation.goToLoginPage();
    });

    testCases.forEach(testCase => {
        it(`should log in with: ${testCase.username}`, () => {
            LoginPage.fillUsername(testCase.username);
            LoginPage.fillPassword(testCase.password);

            LoginPage.clickLoginButton();

            if (testCase.shouldBeLoggedIn) {
                Navigation.verifyUrlContains("inventory.html");
            } else {
                Navigation.verifyUrlEquals("https://www.saucedemo.com/"); 
            }
        });
    });
});
