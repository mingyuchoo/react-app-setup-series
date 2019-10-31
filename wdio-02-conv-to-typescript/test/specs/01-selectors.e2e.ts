import { expect } from 'chai'

describe('computers-database.gattling.io', () => {
  beforeEach(() => {
    browser.url('http://computer-database.gatling.io/computers')
  })
  // -- Example
  it('should have the right title (using browser)', async () => {
    const title = await browser.getTitle()
    expect(title).to.be.equal('Computers database')
  })

  // -- ID
  it('should get exact id', async () => {
    const elem = await $('#actions')
  })

  // -- CSS Query Selector
  it('should have clickable button', async () => {
    const elem = await $('a#add.btn.success')
    elem.click()
    // add expect ... here
  })

  // -- Link Text
  it('should get the exact text (without element)', async () => {
    const elem = await $('=Add a new computer')
    console.log(elem.getText())
    // add expect ... here
  })

  it('should get the exact text (with element)', async () => {
    const elem = await $('a=Add a new computer')
    console.log(elem.getText())
    // add expect ... here
  })

  // -- Partial Link Text
  it('should get partial text (without element)', async () => {
    const elem = await $('*=computer')
    console.log(elem.getText())
    // add expect ... here
  })

  it('should get partial text (with element)', async () => {
    const elem = await $('a*=computer')
    console.log(elem.getText())
    // add expect ... here
  })

  // -- Tag Name
  it('should get the exact element', async () => {
    const elem = await $('<title />')
    console.log(elem.getText())
    // add expect ... here
  })

  // -- xPath
  it('should get exact element', async () => {
    const elem = await $('//BODY/SECTION/TABLE/TBODY/TR[1]/TD[1]/A')
    console.log(elem.getText())
    // add expect ... here
  })

  // -- Chain Selectors
  it('should get exact selector', async () => {
    // TODO
    //const elem = await $('body > div > div:nth-child(2)')
    const elem = await $('.row .entry:nth-child(2)')
      .$('button*=Add')
      .click()
    browser.debug()
  })
})
