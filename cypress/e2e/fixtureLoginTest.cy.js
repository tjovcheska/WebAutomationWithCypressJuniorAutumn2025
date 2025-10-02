describe("Login tests with fixture data", () => {
    const testCases = [
        { username: "standard_user", password: "secret_sauce", shouldBeLoggedIn: true },
        { username: "locked_out_user", password: "secret_sauce", shouldBeLoggedIn: false },
        { username: "problem_user", password: "secret_sauce", shouldBeLoggedIn: true }
    ];

    beforeEach(() => {
        cy.visit("/");
    });

    testCases.forEach(testCase => {
        it(`should log in with: ${testCase.username}`, () => {
            cy.get('[data-test="username"]').should('be.visible').type(testCase.username);
            cy.get('[data-test="password"]').should('be.visible').type(testCase.password);

            cy.get('[data-test="login-button"]').should('be.visible').click();

            if (testCase.shouldBeLoggedIn) {
                cy.url().should("include", "inventory.html");
            } else {
                cy.url().should("eq", "https://www.saucedemo.com/"); 
            }
        });
    });
});
