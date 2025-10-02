
describe("Login functionallity - Positive test cases (standard_user)", () => {
    beforeEach(() => {
        cy.visit("/");

        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.standard_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.standard_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click();

        cy.url().should("include", "inventory.html");
    });

    afterEach(() => {
        cy.get('#react-burger-menu-btn').should('be.visible').click();
        cy.get("[data-test='logout-sidebar-link']").should('be.visible').click();
    });

    it("should login with valid credentials - standard_user", () => {
        cy.get("[data-test='title']").should('be.visible').should('have.text', 'Products');
    });
});

describe("Login functionallity - Positive test cases on mobile (standard_user)", () => {
    beforeEach(() => {
        cy.viewport(375, 667);
        cy.visit("/");

        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.standard_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.standard_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click();

        cy.url().should("include", "inventory.html");
    });

    afterEach(() => {
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get("[data-test='logout-sidebar-link']").should('be.visible').click()
    });


    it("should login with valid credentials on mobile - standard_user", () => {
        cy.get("[data-test='title']").should('be.visible').should('have.text', 'Products');
    });
});


describe("Login functionallity - Positive test cases (visual_user)", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    afterEach(() => {
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get("[data-test='logout-sidebar-link']").should('be.visible').click()
    });

    it("should login with valid credentials - visual_user", () => {
        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.visual_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.visual_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.url().should("include", "inventory.html")
    });
});

describe("Login functionallity - Negative test cases", () => {
    beforeEach(() => {
        cy.visit("/")
    });

    afterEach(() => {
        cy.url().should("eq", "https://www.saucedemo.com/");
    });

    it("should login with invalid credentials", () => {
        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.non_existing_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.non_existing_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.get('[data-test="error"]').should('be.visible').should(
            'have.text', "Epic sadface: Username and password do not match any user in this service"
        );
    });

    it("should login with locked out user", () => {
        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.locked_out_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.locked_out_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.get('[data-test="error"]').should('be.visible').should(
            'have.text', "Epic sadface: Sorry, this user has been locked out."
        );
    });
});

describe("Log out functionallity", () => {
    it("Login and logout - standard_user", () => {
        cy.visit("/")

        cy.fixture("users").then((user) => {
            cy.get('[data-test="username"]').should('be.visible').type(user.standard_user.username);
            cy.get('[data-test="password"]').should('be.visible').type(user.standard_user.password);
        });

        cy.get('[data-test="login-button"]').should('be.visible').click()

        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get("[data-test='logout-sidebar-link']").should('be.visible').click()
    });
});
