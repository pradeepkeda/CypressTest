class LoginPage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
  }

  fillForm(email, password) {
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
  }

  submitForm() {
    cy.get('#send2').click();
  }
}

export default LoginPage;
