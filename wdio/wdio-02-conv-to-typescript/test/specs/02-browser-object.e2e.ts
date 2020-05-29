import { expect } from 'chai'

describe('Browser Object', () => {
  it('should demonstrate the debug command', async () => {
    const elem = await $('#actions')
    elem.getText()
    //browser.debug() // jumping into the browser and change value of #input to 'BAR'
  })
})
// console.log('>>>> ' + browser.sessionId)
// console.log('>>>> ' + browser.capabilities)
