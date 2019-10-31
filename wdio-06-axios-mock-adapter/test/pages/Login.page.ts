import WebdriverIO from 'webdriverio'

import { LoginPageInterface } from '../models/Login.interface'

const id_username = '#username'
const id_password = '#password'

// LoginPage
export default class LoginPage {
  private Login: LoginPageInterface = null

  constructor() {
    this.Login = {
      username: id_username,
      password: id_password
    }
  }

  public async getUsername(): Promise<WebdriverIO.Element> {
    return $(this.Login.username)
  }
  public async getPassword(): Promise<WebdriverIO.Element> {
    return $(this.Login.password)
  }
}
