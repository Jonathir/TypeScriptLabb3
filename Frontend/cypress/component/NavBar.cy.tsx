import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../src/NavBar';

describe('NavBar Component', () => {
    it('renders all navigation links correctly', () => {
      mount(
        <MemoryRouter initialEntries={['/']}>
          <NavBar />
        </MemoryRouter>
      );
  
      cy.contains('Personer').should('be.visible');
      cy.contains('Journalöversikt').should('be.visible');
      cy.contains('Om oss').should('be.visible');
  
      cy.get('a[href="/"]').should('exist');
      cy.get('a[href="/person-overview"]').should('exist');
      cy.get('a[href="/about"]').should('exist');
    });
  });
  