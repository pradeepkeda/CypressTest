import loginData from '../fixtures/login.json'
 
   it('should sign in with the created account', () => {
    // Visit the login page
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');

    // Fill in the login form
    cy.get('#email').type('Pradeep.K@example.com');
    cy.get('#pass').type('Password123');

    // Submit the form
    cy.get('#send2').click();

    // Verify successful login by checking if the user is redirected to the account page
    cy.url().should('include', '/customer/account/');
    cy.get('.logged-in').should('contain', 'Pradeep K');
  });
});
