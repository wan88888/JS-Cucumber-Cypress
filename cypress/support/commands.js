// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command for login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});

// 等待页面加载完成
Cypress.Commands.add('waitForPageToLoad', () => {
  cy.window().then(win => {
    return new Cypress.Promise(resolve => {
      if (win.document.readyState === 'complete') {
        resolve();
      } else {
        win.addEventListener('load', resolve);
      }
    });
  });
});

// 获取随机字符串
Cypress.Commands.add('getRandomString', (length = 10) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
});

// 按文本内容查找元素
Cypress.Commands.add('getByText', (text, options = {}) => {
  return cy.contains(text, options);
});

// 清除浏览器cookies和localStorage
Cypress.Commands.add('clearBrowserData', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((win) => {
    win.sessionStorage.clear();
  });
});

// 捕获并记录控制台错误
Cypress.Commands.add('logConsoleErrors', () => {
  cy.window().then((win) => {
    cy.spy(win.console, 'error').as('consoleError');
  });
});

// 检查页面是否有控制台错误
Cypress.Commands.add('checkNoConsoleErrors', () => {
  cy.get('@consoleError').should('not.be.called');
});

// 等待API请求完成
Cypress.Commands.add('waitForApi', (method, endpoint) => {
  cy.intercept(method, endpoint).as('apiCall');
  cy.wait('@apiCall');
});