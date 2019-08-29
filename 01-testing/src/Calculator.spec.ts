import { expect } from 'chai';

import { Calculator } from './Calculator';

describe('Calculator', () => {
  before(() => {
    console.log('Calculator Before');
  });
  beforeEach(() => {
    console.log('Calculator BeforeEach');
  });
  afterEach(() => {
    console.log('Calculator AfterEach');
  });
  after(() => {
    console.log('Calculator After');
  });
  it('should return sum two numbers.', () => {
    const calculator = new Calculator();
    expect(calculator.add(10, 20)).to.equal(30);
  });
});