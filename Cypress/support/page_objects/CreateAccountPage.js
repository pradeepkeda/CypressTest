class CreateAccountPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  }

  fillForm(firstName, lastName, email, password) {
    cy.get('#firstname').type(firstName);
    cy.get('#lastname').type(lastName);
    cy.get('#email_address').type(email);
    cy.get('#password').type(password);
    cy.get('#password-confirmation').type(password);
  }

  submitForm() {
    cy.get('.submit').click();
  }

  verifyAccountCreation() {
    cy.url().should('include', '/customer/account/');
    cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.');
  }
}

export default CreateAccountPage;
