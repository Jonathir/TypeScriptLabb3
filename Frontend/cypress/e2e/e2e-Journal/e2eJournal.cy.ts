describe('E2E for the journal project', () => {
    it('Visits the site and controlls backend connection', () => {

        //visits the site
        cy.visit('http://localhost:5173/');

        //controls visibility of rendered elements
        cy.contains('h1', 'Journaler').should('be.visible');

        //controls API-call
        cy.get('[data-testid="journal-name"]').should('exist');
        cy.get('[data-testid="journal-description"]').should('exist');
        cy.get('[data-testid="journal-birthdate"]').should('exist');
    });
});