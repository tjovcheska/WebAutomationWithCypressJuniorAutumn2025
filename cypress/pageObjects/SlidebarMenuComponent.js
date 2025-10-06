class SlidebarMenuComponent {
    logoutButton = () => cy.get("[data-test='logout-sidebar-link']");

    clickLogoutButton() {
        this.logoutButton().should('be.visible').click();
    }
}

export default new SlidebarMenuComponent();
