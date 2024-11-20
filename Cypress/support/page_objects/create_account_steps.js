import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CreateAccountPage from '../page_objects/CreateAccountPage';
import LoginPage from '../page_objects/LoginPage';
import AccountPage from '../page_objects/AccountPage';

const createAccountPage = new CreateAccountPage();
const loginPage = new LoginPage();
const accountPage = new AccountPage();

Given('I open the create account page', () => {
  createAccountPage.visit();
});

When('I fill in the registration form', () => {
  createAccountPage.fillForm('Pradeep', 'K', 'Pradeep.K', 'Password123');
});

And('I submit the registration form', () => {
  createAccountPage.submitForm();
});

Then('I should see the account creation success message', () => {
  createAccountPage.verifyAccountCreation();
});

Given('I open the login page', () => {
  loginPage.visit();
});

When('I fill in the login form', () => {
  loginPage.fillForm('Pradeep.K', 'Password123');
});

And('I submit the login form', () => {
  loginPage.submitForm();
});

Then('I should be redirected to the account page', () => {
  accountPage.verifyRedirection();
});

And('I should see the welcome message', () => {
  accountPage.verifyWelcomeMessage('Pradeep K');
});
