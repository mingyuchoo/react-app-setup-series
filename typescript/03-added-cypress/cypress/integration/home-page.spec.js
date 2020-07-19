beforeEach(() => {
  // root-level hook
  // runs before every test
  cy.log('root-beforeEach()')
})

describe('Level-1', () => {
  before(() => {
    // runs once before all tests in the block
    cy.log('Level-1-before()')
  })

  beforeEach(() => {
    // runs before each test in the block
    cy.log('Level-1-beforeEach()')
  })

  it('Level-1 it1', () => {
    cy.log('Level-1 itcase performed.')
  })

  it('Level-1 it2', () => {
    cy.log('Level-1 itcase performed.')
  })

  describe('Level-2', () => {

    before(() => {
      // runs once before all tests in the block
      cy.log('Level-2-before()')
    })

    beforeEach(() => {
      // runs before each test in the block
      cy.log('Level-2-beforeEach()')
    })

    it('Level-2 it1', () => {
      cy.log('Level-2 itcase performed.')
    })

    afterEach(() => {
      // runs after each test in the block
      cy.log('Level-2-afterEach()')
    })

    after(() => {
      // runs once after all tests in the block
      cy.log('Level-2-after()')
    })

  })

  it('Level-1 it3', () => {
    cy.log('Level-1 itcase performed.')
  })


  afterEach(() => {
    // runs after each test in the block
    cy.log('Level-1-afterEach()')
  })

  after(() => {
    // runs once after all tests in the block
    cy.log('Level-1-after()')
  })
})