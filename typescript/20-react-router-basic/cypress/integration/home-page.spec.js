describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit(`http://${Cypress.env('host')}:${Cypress.env('port')}`);
    cy.get('.App-link').should('be.visible');
  });
});
