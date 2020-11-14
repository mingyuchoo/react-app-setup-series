import { expect } from 'chai'

import LoginPage from '../pages/Login.page'

describe('Login', async () => {
  let loginPage: LoginPage

  before(async () => {
    browser.url('http://the-internet.herokuapp.com/login')
    loginPage = await new LoginPage()
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
