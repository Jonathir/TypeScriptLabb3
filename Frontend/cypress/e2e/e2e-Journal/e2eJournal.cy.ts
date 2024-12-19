describe('Adding a person to the system', () => {
    it('Visit the site, create a person in the database and show the person', () => {
        //Given: En användare är på sidan för att lägga till en person
        cy.visit('http://localhost:5173/');

        cy.get('[data-testid="add-person-form"]').should('be.visible');

        //When: Användaren fyller i namn, födelsedatum och e-post och skickar
        cy.get('[data-testid="input-name"]').should('exist');
        cy.get('[data-testid="input-email"]').should('exist');
        cy.get('[data-testid="input-birthdate"]').should('exist');
        cy.get('[data-testid="input-birthdate"]').click();
        cy.get('input[type="date"]').type('1999-03-15');

        cy.get('[data-testid="submit-button"]').click();

        //Then: Personens namn, födelsedatum och epost visas på sidan
        cy.get('[data-testid="person-name"]').contains('Anna Svensson').should('exist');
        cy.get('[data-testid="person-birthdate"]').contains('1985-03-14').should('exist');
        cy.get('[data-testid="person-email"]').contains('anna.svensson@example.com').should('exist');
    });
});