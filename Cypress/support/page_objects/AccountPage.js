class AccountPage {
  verifyRedirection() {
    cy.url().should('include', '/customer/account/');
  }

  verifyWelcomeMessage(name) {
    cy.get('.logged-in').should('contain', name);
  }
}

export default AccountPage;
