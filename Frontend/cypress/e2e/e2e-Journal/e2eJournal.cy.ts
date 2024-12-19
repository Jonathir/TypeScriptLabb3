describe('E2E for the journal project', () => {
    it('Visit the site, create a person in the database and show the person', () => {

        cy.visit('http://localhost:5173/');

        cy.get('[data-testid="add-person-form"]').should('be.visible');

        cy.get('[data-testid="input-name"]').should('exist');
        cy.get('[data-testid="input-email"]').should('exist');
        cy.get('[data-testid="input-birthdate"]').should('exist');

        cy.get('[data-testid="input-birthdate"]').click();
        cy.get('input[type="date"]').type('1999-03-15');

        cy.get('[data-testid="submit-button"]').click();

        cy.wait(2000);
        cy.get('[data-testid="person-name"]').contains('Anna Svensson').should('exist');
        cy.get('[data-testid="person-birthdate"]').contains('1985-03-14').should('exist');
        cy.get('[data-testid="person-email"]').contains('anna.svensson@example.com').should('exist');
    });
});