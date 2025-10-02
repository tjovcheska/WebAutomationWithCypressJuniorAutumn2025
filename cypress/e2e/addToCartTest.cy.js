// Test Case: Login, add 2 products, validate cart, remove 1 product

// Preconditions:
// 	•	User has access to https://www.saucedemo.com/
// 	•	Use the standard test account: standard_user / secret_sauce

// Steps:
// 	1.	Open the website
// 	•	Navigate to https://www.saucedemo.com/
// 	2.	Login
// 	•	Enter username: standard_user
// 	•	Enter password: secret_sauce
// 	•	Click Login
// 	3.	Add products to the cart
// 	•	On the products page, locate Sauce Labs Backpack and click Add to cart
// 	•	Locate Sauce Labs Bike Light and click Add to cart
// 	4.	Open the cart
// 	•	Click the cart icon in the top-right corner
// 	5.	Validate products in the cart
// 	•	Verify Sauce Labs Backpack is listed in the cart
// 	•	Verify Sauce Labs Bike Light is listed in the cart
// 	6.	Remove the first product from the cart
// 	•	Click Remove for Sauce Labs Backpack
// 	7.	Validate remaining products
// 	•	Confirm that only Sauce Labs Bike Light remains in the cart


// Expected Results:
// 	•	User successfully logs in
// 	•	Both products are added to the cart
// 	•	Cart shows both products before removal
// 	•	After removing Sauce Labs Backpack, only Sauce Labs Bike Light remains

describe("Add to cart test", () => {
    it("should login, add 2 specific products, validate cart, remove first product from cart", () => {
        // 1 step: Open the website
        cy.visit("/")

        // 2 step: Login with standard_user
        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.standard_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.standard_user.password);
        });
        cy.get('[data-test="login-button"]').should('be.visible').click()

        cy.url().should("include", "inventory.html")

        // 3 step: Add product to the cart
        // cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        // cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible').click()

        // This approach is more flexible and scalable (if the Add To Cart button has the same locator for all products)
        const productsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
        const productsToAddLocators = ['backpack', 'bike-light'];
        productsToAddLocators.forEach((locator) => {
            // console.log(productName);
            cy.get(`[data-test="add-to-cart-sauce-labs-${locator}"]`).should('be.visible').click()
        });

        // 4 step: Open the cart
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').click()

        cy.url().should("include", "cart.html")

        // 5 steps: Validate the product in the cart
        // cy.contains('.cart_item', 'Sauce Labs Backpack').should('be.visible')
        // cy.contains('.cart_item', 'Sauce Labs Bike Light').should('be.visible')
        productsToAdd.forEach((productName) => {
            cy.contains('.cart_item', productName).should('be.visible')  
        });

        // 6 step: Remove the first product from the cart
        cy.contains('.cart_item', 'Sauce Labs Backpack').find('button').click();

        // 7 step: Validate that the sendon priduct remains in the cart
        cy.get('.cart_item').should('have.length', 1).and('contain.text', 'Sauce Labs Bike Light')

    });
});
