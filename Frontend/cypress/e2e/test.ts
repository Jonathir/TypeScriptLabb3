import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on the medical records page', () => {
  cy.visit('http://localhost:5173/person-overview');
  cy.get('[data-testid="medical-records-page"]').should('be.visible');
});

When('the user fetches the medical record for person {string}', (personName: string) => {
  cy.get('[data-testid="person-name-1"]').click();
  cy.get('[data-testid="person-name-1"]').contains(personName).should('exist');
});

Then('the medical record with description {string} should be visible', (description: string) => {
  cy.get('[data-testid="medical-record-description"]').contains(description).should('exist');
});

Then('the record\'s creation date {string} should be visible', (creationDate: string) => {
  cy.get('[data-testid="medical-record-created-at"]').contains(creationDate).should('exist');
});

Then('the associated person\'s name {string} should be visible', (personName: string) => {
  cy.get('[data-testid="person-name-1"]').contains(personName).should('exist');
});

Then('the associated person\'s birthdate {string} should be visible', (birthdate: string) => {
  cy.get('[data-testid="person-birthdate"]').contains(birthdate).should('exist');
});
