import { expect } from 'chai'

import PromiseLogin from '../pages/PromiseLogin.page'

describe('PromiseLogin Page', async () => {
  let loginPage: PromiseLogin

  before(async () => {
    browser.url('http://the-internet.herokuapp.com/login')
    loginPage = await new PromiseLogin()
  })

  it('should have a username inputbox', async () => {
    let username = await loginPage.getUsername()
    let tag_name = await username.getTagName()
    expect(tag_name).equal('input')
  })

  it('should have a password inputbox', async () => {
    let password = await loginPage.getPassword()
    let tag_name = await password.getTagName()
    expect(tag_name).equal('input')
  })
})
