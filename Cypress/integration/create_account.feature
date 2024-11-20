Feature: Create and sign in with a new account on Magento

  Scenario: User creates a new account
    Given I open the create account page
    When I fill in the registration form
    And I submit the registration form
    Then I should see the account creation success message

  Scenario: User signs in with the created account
    Given I open the login page
    When I fill in the login form
    And I submit the login form
    Then I should be redirected to the account page
    And I should see the welcome message
