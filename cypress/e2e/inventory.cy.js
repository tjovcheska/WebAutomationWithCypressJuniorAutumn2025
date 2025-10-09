import Navigation from "../pageObjects/Navigation";
import LoginPage from "../pageObjects/LoginPage";
import InventoryPage  from "../pageObjects/InventoryPage";

describe("Inventory page test", () => {
    beforeEach(() => {
        Navigation.goToLoginPage();
        cy.fixture("users").then((user) => {
            LoginPage.fillUsername(user.standard_user.username);
            LoginPage.fillPassword(user.standard_user.password);
        });

        LoginPage.clickLoginButton();
    });

    it("should decrease the number of items in the cart after clicking 'Add to cart' button on already added item", () => {
        InventoryPage.validateAddToCartButtonText('sauce-labs-bike-light');
        InventoryPage.clickAddToCartButton('sauce-labs-bike-light');
        InventoryPage.validateCartNumber('1');
        InventoryPage.validateRemoveButtonText('sauce-labs-bike-light');
        InventoryPage.validateAddToCartButtonText('test.allthethings()-t-shirt-(red)');
        InventoryPage.clickAddToCartButton('test.allthethings()-t-shirt-(red)');
        InventoryPage.validateCartNumber('2');
        InventoryPage.validateRemoveButtonText('test.allthethings()-t-shirt-(red)');
        InventoryPage.clickRemoveButton('sauce-labs-bike-light');
        InventoryPage.validateAddToCartButtonText('sauce-labs-bike-light');
        InventoryPage.validateCartNumber('1');
    });

    it("should count the number of displayed items", () => {
        cy.fixture("inventory").then((inventory) => {
            const expectedNumber = inventory.totalNumberOfItems;
            InventoryPage.assertNumberOfItems(expectedNumber);
        });
    });
});