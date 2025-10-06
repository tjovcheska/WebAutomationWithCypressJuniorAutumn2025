class Navigation {
    goToLoginPage() {
        cy.visit("/");
    }

    verifyUrlContains(endpoint) {
        cy.url().should("include", endpoint);
    }

    setViewportToMobile(height, width) {
        cy.viewport(height, width);
    }

    verifyUrlEquals(expectedUrl) {
        cy.url().should("eq", expectedUrl); 
    }
}

export default new Navigation();
