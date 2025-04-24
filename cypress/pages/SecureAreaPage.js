import BasePage from './BasePage';

class SecureAreaPage extends BasePage {
  // Page element selectors
  logoutButton = '.button.secondary';
  heading = 'h2';
  successMessage = '.flash.success';
  
  /**
   * Verify that user has successfully logged in and is on the secure area page
   * @returns {SecureAreaPage} - returns this page object for method chaining
   */
  verifySecureAreaPage() {
    this.verifyUrl('/secure');
    this.verifyText(this.heading, 'Secure Area');
    return this;
  }

  /**
   * Click logout button
   * @returns {SecureAreaPage} - returns this page object for method chaining
   */
  clickLogout() {
    this.click(this.logoutButton);
    return this;
  }
}

export default SecureAreaPage; 