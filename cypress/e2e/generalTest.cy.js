it("should appear in cypress runner", () => {

});

it("should navigate to saucedemo page", () => {
    cy.visit("/")
    cy.url().should("include", "saucedemo.com")
    cy.get('#root').should('be.visible').should('contain.text', 'Swag Labs')
    cy.get('.login_logo').should('be.visible').should('have.text', 'Swag Labs', { timeout: 15000 })
    cy.contains('Swag Labs').should('be.visible')
})

it("should login with valid credentials", () => {
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("standard_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    // cy.get('[data-test="login-button"]').should('be.visible').type("Login")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.url().should("include", "inventory.html")
})

it("should login with valid credentials on mobile", () => {
    cy.viewport(375, 667)
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("standard_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    // cy.get('[data-test="login-button"]').should('be.visible').type("Login")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.url().should("include", "inventory.html")
})

it("should login with invalid credentials", () => {
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("invalid_username")
    cy.get('[data-test="password"]').should('be.visible').type("12345")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').should(
        'have.text', "Epic sadface: Username and password do not match any user in this service"
    )
    cy.url().should("eq", "https://www.saucedemo.com/")
})

it("should login with locked out user", () => {
    cy.visit("/")
    cy.get('[data-test="username"]').should('be.visible').type("locked_out_user")
    cy.get('[data-test="password"]').should('be.visible').type("secret_sauce")
    cy.get('[data-test="login-button"]').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').should(
        'have.text', "Epic sadface: Sorry, this user has been locked out."
    )
    cy.url().should("eq", "https://www.saucedemo.com/")
})
