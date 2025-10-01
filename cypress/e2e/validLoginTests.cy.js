it("should login with valid credentials", () => {
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("standard_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    // cy.get('[data-test="login-button"]').should('be.visible').type("Login")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.url().should("include", "inventory.html")
});

it("should login with valid credentials on mobile", () => {
    cy.viewport(375, 667)
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("standard_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    // cy.get('[data-test="login-button"]').should('be.visible').type("Login")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.url().should("include", "inventory.html")
});
