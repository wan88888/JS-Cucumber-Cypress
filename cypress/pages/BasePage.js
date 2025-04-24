class BasePage {
  /**
   * Navigate to a specific page
   * @param {string} path - The path to navigate to
   * @returns {BasePage} - returns this page object for method chaining
   */
  visit(path) {
    cy.visit(path);
    return this;
  }

  /**
   * Get an element using a CSS selector
   * @param {string} selector - CSS selector
   * @param {object} options - Additional options for cy.get
   * @returns {Cypress.Chainable} - Cypress element
   */
  getElement(selector, options = {}) {
    return cy.get(selector, options);
  }

  /**
   * Type text into an input field
   * @param {string} selector - CSS selector for the input field
   * @param {string} text - Text to type
   * @param {object} options - Additional options for typing
   * @returns {BasePage} - returns this page object for method chaining
   */
  typeText(selector, text, options = {}) {
    this.getElement(selector).type(text, options);
    return this;
  }

  /**
   * Clear an input field and type text
   * @param {string} selector - CSS selector for the input field
   * @param {string} text - Text to type
   * @returns {BasePage} - returns this page object for method chaining
   */
  clearAndTypeText(selector, text) {
    this.getElement(selector).clear().type(text);
    return this;
  }

  /**
   * Click on an element
   * @param {string} selector - CSS selector for the element to click
   * @param {object} options - Additional options for clicking
   * @returns {BasePage} - returns this page object for method chaining
   */
  click(selector, options = {}) {
    this.getElement(selector).click(options);
    return this;
  }

  /**
   * Force click on an element (useful when an element is not directly clickable)
   * @param {string} selector - CSS selector for the element to click
   * @returns {BasePage} - returns this page object for method chaining
   */
  forceClick(selector) {
    this.getElement(selector).click({ force: true });
    return this;
  }

  /**
   * Verify an element contains specific text
   * @param {string} selector - CSS selector
   * @param {string} text - Text to verify
   * @returns {BasePage} - returns this page object for method chaining
   */
  verifyText(selector, text) {
    this.getElement(selector).should('contain', text);
    return this;
  }

  /**
   * Verify an element is visible
   * @param {string} selector - CSS selector
   * @returns {BasePage} - returns this page object for method chaining
   */
  verifyElementVisible(selector) {
    this.getElement(selector).should('be.visible');
    return this;
  }

  /**
   * Verify an element is not visible
   * @param {string} selector - CSS selector
   * @returns {BasePage} - returns this page object for method chaining
   */
  verifyElementNotVisible(selector) {
    this.getElement(selector).should('not.be.visible');
    return this;
  }

  /**
   * Verify an element exists in the DOM
   * @param {string} selector - CSS selector
   * @returns {BasePage} - returns this page object for method chaining
   */
  verifyElementExists(selector) {
    this.getElement(selector).should('exist');
    return this;
  }

  /**
   * Verify an element does not exist in the DOM
   * @param {string} selector - CSS selector
   * @returns {BasePage} - returns this page object for method chaining
   */
  verifyElementDoesNotExist(selector) {
    this.getElement(selector, { timeout: 1000, failOnStatusCode: false }).should('not.exist');
    return this;
  }

  /**
   * Verify URL contains specific path
   * @param {string} path - Path to verify
   * @returns {BasePage} - returns this page object for method chaining
   */
  verifyUrl(path) {
    cy.url().should('include', path);
    return this;
  }
  
  /**
   * Wait for a specific time in milliseconds
   * @param {number} ms - Time to wait in milliseconds
   * @returns {BasePage} - returns this page object for method chaining
   */
  wait(ms) {
    cy.wait(ms);
    return this;
  }
  
  /**
   * Scroll element into view
   * @param {string} selector - CSS selector
   * @returns {BasePage} - returns this page object for method chaining
   */
  scrollIntoView(selector) {
    this.getElement(selector).scrollIntoView();
    return this;
  }
  
  /**
   * Select option from dropdown by value
   * @param {string} selector - CSS selector for the dropdown
   * @param {string} value - Value to select
   * @returns {BasePage} - returns this page object for method chaining
   */
  selectByValue(selector, value) {
    this.getElement(selector).select(value);
    return this;
  }
  
  /**
   * Select option from dropdown by visible text
   * @param {string} selector - CSS selector for the dropdown
   * @param {string} text - Text to select
   * @returns {BasePage} - returns this page object for method chaining
   */
  selectByText(selector, text) {
    this.getElement(selector).select(text);
    return this;
  }
  
  /**
   * Check if element exists (without failing test)
   * @param {string} selector - CSS selector
   * @returns {Promise<boolean>} - Whether element exists
   */
  async elementExists(selector) {
    return new Promise(resolve => {
      cy.get('body').then($body => {
        if ($body.find(selector).length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }
}

export default BasePage; 