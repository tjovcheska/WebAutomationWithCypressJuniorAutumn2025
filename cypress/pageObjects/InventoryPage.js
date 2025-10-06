class InventoryPage {
    slidebarMenuButton = () => cy.get('#react-burger-menu-btn');
    inventoryPageTitle = () => cy.get("[data-test='title']");
    shoppingCart = () => cy.get('[data-test="shopping-cart-link"]');

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
}

export default new InventoryPage();