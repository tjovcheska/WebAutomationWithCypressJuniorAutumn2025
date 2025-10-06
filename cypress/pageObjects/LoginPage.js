class LoginPage {
    usernameInput = () => cy.get('[data-test="username"]');
    passwordInput = () => cy.get('[data-test="password"]');
    loginButton = () => cy.get('[data-test="login-button"]');
    loginPage = () => cy.get('#root');
    loginPageLogo = () => cy.get('.login_logo');
    loginPageTitle = () => cy.contains('Swag Labs');
    errorMessage = () => cy.get('[data-test="error"]');

    fillUsername(username) {
        this.usernameInput().should('be.visible').type(username);
    }

    fillPassword(password) {
        this.passwordInput().should('be.visible').type(password);
    }

    clickLoginButton() {
        this.loginButton().should('be.visible').click();
    }

    verifyLoginPageTitle(title) {
        this.loginPage.should('be.visible').should('contain.text', title);
    }

    verifyLoginPageLogo(title) {
        this.loginPageLogo().should('be.visible').should('have.text', title, { timeout: 15000 });
    }

    verifyLoginPageTitleVisibility() {
        this.loginPageTitle.should('be.visible');
    }

    verifyErrorMessage(message) {
        this.errorMessage.should('be.visible').should(
            'have.text', message
        );   
    }
}

export default new LoginPage()