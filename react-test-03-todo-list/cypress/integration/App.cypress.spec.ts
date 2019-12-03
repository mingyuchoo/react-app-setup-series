describe('<App /> (Cypress)', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('1. Renders without crashing.', () => {
    cy.get('h1').contains('React To Do');
  });

  it('2. Renders two default todo items.', () => {
    cy.get('.ToDoItem').should('have.length', 2);
  });

  it('3. Has an input field.', () => {
    cy.get('input').should('have.length', 1);
  });

  it('4. Has an add button.', () => {
    cy.get('.ToDo-Add').should('have.length', 1);
  });
});

describe('Adding items (Cypress)', () => {
  it('5. When the add button is pressed, if the input field is empty, prevent item from being added', () => {
    cy.get('.ToDo-Add').click();
  });
  it('6. When the add button is pressed, if the input field has text, it creates a new todo item', () => {
    cy.get('input')
      .type('Create more tests')
      .should('have.value', 'Create more tests');
    cy.get('.ToDo-Add').click();
    cy.get('.ToDoItem').should('have.length', 3);
  });
});
