import { expect } from 'chai'

import loginPage from '../pages/Login.page'

describe('Login Page', () => {
  before(() => {
    browser.url('http://the-internet.herokuapp.com/login')
  })

  it('should have a username inputbox', () => {
    let username = $(loginPage.getUsername())
    let tag_name = username.getTagName()
    expect(tag_name).equal('input')
  })

  it('should have a password inputbox', () => {
    let password = $(loginPage.getPassword())
    let tag_name = password.getTagName()
    expect(tag_name).equal('input')
  })
})
