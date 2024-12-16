import React from "react";
import { mount } from "cypress/react18";
import Button from '../../src/Button';

describe('Button component', () => {
  it('renders correctly with correct label', () => {
    const label = 'Klicka här!';
    mount(<Button label={label} onClick={() => {}} />);

    cy.get('[data-testid="custom-button"]').should('be.visible').and('contain.text', label);
  });

  it('handles clicks', () => {
    const onClickSpy = cy.spy().as('onClickSpy');

    mount(<Button label="Klicka här!" onClick={onClickSpy} />);

    cy.get('[data-testid="custom-button"]').click();

    cy.get('@onClickSpy').should('have.been.calledOnce');
  });
});