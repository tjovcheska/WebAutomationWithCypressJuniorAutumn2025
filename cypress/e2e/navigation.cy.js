describe("Navigation tests", () => {
    it("should navigate to saucedemo page", () => {
        cy.visit("/")
        cy.url().should("include", "saucedemo.com")
        cy.get('#root').should('be.visible').should('contain.text', 'Swag Labs')
        cy.get('.login_logo').should('be.visible').should('have.text', 'Swag Labs', { timeout: 15000 })
        cy.contains('Swag Labs').should('be.visible')
    });
});
