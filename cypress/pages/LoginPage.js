import BasePage from './BasePage';

class LoginPage extends BasePage {
  // Page element selectors
  usernameInput = '#username';
  passwordInput = '#password';
  loginButton = 'button[type="submit"]';
  successMessage = '.flash.success';
  errorMessage = '.flash.error';
  
  /**
   * Navigate to the login page
   */
  visit() {
    super.visit('/login');
  }

  /**
   * Enter username in the username field
   * @param {string} username - The username to enter
   * @returns {LoginPage} - returns this page object for method chaining
   */
  enterUsername(username) {
    this.typeText(this.usernameInput, username);
    return this;
  }

  /**
   * Enter password in the password field
   * @param {string} password - The password to enter
   * @returns {LoginPage} - returns this page object for method chaining
   */
  enterPassword(password) {
    this.typeText(this.passwordInput, password);
    return this;
  }

  /**
   * Click login button to submit the form
   * @returns {LoginPage} - returns this page object for method chaining
   */
  clickLogin() {
    this.click(this.loginButton);
    return this;
  }

  /**
   * Login with the specified credentials
   * @param {string} username - The username to enter
   * @param {string} password - The password to enter
   * @returns {LoginPage} - returns this page object for method chaining
   */
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
    return this;
  }

  /**
   * Verify successful login message is displayed
   * @returns {LoginPage} - returns this page object for method chaining
   */
  verifyLoginSuccess() {
    this.verifyElementVisible(this.successMessage);
    this.verifyText(this.successMessage, 'You logged into a secure area!');
    return this;
  }

  /**
   * Verify login error message is displayed
   * @returns {LoginPage} - returns this page object for method chaining
   */
  verifyLoginError() {
    this.verifyElementVisible(this.errorMessage);
    return this;
  }
}

export default LoginPage; 