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
<<<<<<< HEAD
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://www.zentaro.business/login');
  
  // Buscamos el primer campo de texto/email genérico
  cy.get('input[type="email"], input[name="email"], input[type="text"]').first().clear().type(email);
  cy.get('input[type="password"], input[name="password"]').first().clear().type(password);
  
  cy.contains('Iniciar sesión').click();
  
  // Aserción
  cy.contains('Bienvenido', { timeout: 10000 }).should('be.visible');
});
=======
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
>>>>>>> 8ee33ab74c88acd7d22970e04eeb01a89356e8be
