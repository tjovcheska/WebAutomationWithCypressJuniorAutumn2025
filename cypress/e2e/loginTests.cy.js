import LoginPage from "../pageObjects/LoginPage";
import Navigation from "../pageObjects/Navigation";
import InventoryPage from "../pageObjects/InventoryPage";
import SlidebarMenuComponent from "../pageObjects/SlidebarMenuComponent";

describe("Login functionallity - Positive test cases (standard_user)", () => {
    beforeEach(() => {
        Navigation.goToLoginPage();

        cy.fixture("users").then((user) => {
            LoginPage.fillUsername(user.standard_user.username);
            LoginPage.fillPassword(user.standard_user.password);
        });

        LoginPage.clickLoginButton();

        Navigation.verifyUrlContains("inventory.html");
    });

    afterEach(() => {
        InventoryPage.clickSlidebarMenuButton();
        SlidebarMenuComponent.clickLogoutButton();
    });

    it("should login with valid credentials - standard_user", () => {
        InventoryPage.verifyInventoryPageTitle('Products');
    });
});

describe("Login functionallity - Positive test cases on mobile (standard_user)", () => {
    beforeEach(() => {
        Navigation.setViewportToMobile(375, 667);
        Navigation.goToLoginPage();

        cy.fixture("users").then((user) => {
            LoginPage.fillUsername(user.standard_user.username);
            LoginPage.fillPassword(user.standard_user.password);
        });

        LoginPage.clickLoginButton();

        Navigation.verifyUrlContains("inventory.html");
    });

    afterEach(() => {
        InventoryPage.clickSlidebarMenuButton();
        SlidebarMenuComponent.clickLogoutButton();
    });


    it("should login with valid credentials on mobile - standard_user", () => {
        InventoryPage.verifyInventoryPageTitle('Products');
    });
});


describe("Login functionallity - Positive test cases (visual_user)", () => {
    beforeEach(() => {
        Navigation.goToLoginPage();
    });

    afterEach(() => {
        InventoryPage.clickSlidebarMenuButton();
        SlidebarMenuComponent.clickLogoutButton();
    });

    it("should login with valid credentials - visual_user", () => {
        cy.fixture("users").then((user) => {
            LoginPage.fillUsername(user.standard_user.username);
            LoginPage.fillPassword(user.standard_user.password);
        });

        LoginPage.clickLoginButton();

        Navigation.verifyUrlContains("inventory.html");
    });
});

describe("Login functionallity - Negative test cases", () => {
    beforeEach(() => {
        Navigation.goToLoginPage();
    });

    afterEach(() => {
        Navigation.verifyUrlEquals("https://www.saucedemo.com/")
    });

    it.skip("should login with invalid credentials", () => {
        cy.fixture("users").then((user) => {
            LoginPage.fillUsername(user.standard_user.username);
            LoginPage.fillPassword(user.standard_user.password);
        });

        LoginPage.clickLoginButton();
        LoginPage.verifyErrorMessage("Epic sadface: Username and password do not match any user in this service");
    });

    // TODO: Refactor using Page Object Model
    it("should login with locked out user", () => {
        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.locked_out_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.locked_out_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.get('[data-test="error"]').should('be.visible').should(
            'have.text', "Epic sadface: Sorry, this user has been locked out."
        );
    });
});

// TODO: Refactor using Page Object Model
describe("Log out functionallity", () => {
    it("Login and logout - standard_user", () => {
        cy.visit("/")

        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.standard_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.standard_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click()

        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get("[data-test='logout-sidebar-link']").should('be.visible').click()
    });
});
