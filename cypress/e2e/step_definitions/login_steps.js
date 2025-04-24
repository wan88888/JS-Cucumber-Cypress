import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
import SecureAreaPage from '../../pages/SecureAreaPage';

let userData;
const loginPage = new LoginPage();
const secureAreaPage = new SecureAreaPage();

// Load test data before tests
Before(() => {
  // 优先从环境变量读取，如果不存在再从fixture加载
  if (Cypress.env('validUser') && Cypress.env('invalidUser')) {
    userData = {
      validUser: Cypress.env('validUser'),
      invalidUser: Cypress.env('invalidUser')
    };
  } else {
    cy.fixture('users.json').then((data) => {
      userData = data;
    });
  }
});

// Given steps
Given('I navigate to the login page', () => {
  loginPage.visit();
});

// When steps
When('I enter {string} as username', (username) => {
  // 使用映射表替代if-else条件判断
  const usernameMap = {
    'tomsmith': () => userData.validUser.username,
    'invaliduser': () => userData.invalidUser.username,
  };
  
  const resolvedUsername = usernameMap[username] ? usernameMap[username]() : username;
  loginPage.enterUsername(resolvedUsername);
});

When('I enter {string} as password', (password) => {
  // 使用映射表替代if-else条件判断
  const passwordMap = {
    'SuperSecretPassword!': () => userData.validUser.password,
    'invalidpassword': () => userData.invalidUser.password,
  };
  
  const resolvedPassword = passwordMap[password] ? passwordMap[password]() : password;
  loginPage.enterPassword(resolvedPassword);
});

When('I click on the login button', () => {
  loginPage.clickLogin();
});

// Then steps
Then('I should be logged in successfully', () => {
  loginPage.verifyLoginSuccess();
});

Then('I should be redirected to the secure area', () => {
  secureAreaPage.verifySecureAreaPage();
});

Then('I should see an error message', () => {
  loginPage.verifyLoginError();
}); 