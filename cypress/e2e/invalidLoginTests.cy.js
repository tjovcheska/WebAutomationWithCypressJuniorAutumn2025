it("should login with invalid credentials", () => {
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("invalid_username")
    cy.get('[data-test="password"]').should('be.visible').type("12345")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').should(
        'have.text', "Epic sadface: Username and password do not match any user in this service"
    )
    cy.url().should("eq", "https://www.saucedemo.com/")
});

it("should login with locked out user", () => {
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("locked_out_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').should(
        'have.text', "Epic sadface: Sorry, this user has been locked out."
    )
    cy.url().should("eq", "https://www.saucedemo.com/")
});
