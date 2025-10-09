class InventoryPage {
    slidebarMenuButton = () => cy.get('#react-burger-menu-btn');
    inventoryPageTitle = () => cy.get("[data-test='title']");
    shoppingCart = () => cy.get('[data-test="shopping-cart-link"]');
    addToCartSaucelabsBikeLight = () => cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]');
    addToCartBadge = () => cy.get('[data-test="shopping-cart-badge"]');
    inventoryItem = () => cy.get('[data-test = "inventory-item"]');

    clickSlidebarMenuButton() {
        this.slidebarMenuButton().should('be.visible').click();
    }

    verifyInventoryPageTitle(expectedTitle) {
        this.inventoryPageTitle().should('be.visible').should('have.text', expectedTitle);
    }

    clickAddToCartButton(locator) {
        cy.get(`[data-test="add-to-cart-sauce-labs-${locator}"]`).should('be.visible').click();
    }

    clickShoppingCartLink() {
        this.shoppingCart().should('be.visible').click();
    }

    clickAddToCartButton(locator) {
        cy.get(`[data-test="add-to-cart-${locator}"]`).should('be.visible').click();
    }

    validateCartNumber(number) {
        this.addToCartBadge().should('be.visible').should('have.text', number)
    }

    clickRemoveButton(locator) {
        cy.get(`[data-test="remove-${locator}"]`).should('be.visible').click();
    }

    validateAddToCartButtonText(locator) {
        cy.get(`[data-test="add-to-cart-${locator}"]`).should('have.text', "Add to cart");
    }

    validateRemoveButtonText(locator) {
        cy.get(`[data-test="remove-${locator}"]`).should('have.text', "Remove");
    }

    assertNumberOfItems(expectedNumber) {
        this.inventoryItem().should('have.length', expectedNumber);
    }

}

export default new InventoryPage();