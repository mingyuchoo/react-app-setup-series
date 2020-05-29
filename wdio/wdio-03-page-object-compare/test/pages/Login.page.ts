import { LoginPageInterface } from '../models'

const id_username = '#username'
const id_password = '#password'

// LoginPage
class LoginPage {
  private Login: LoginPageInterface = null

  constructor() {
    this.Login = {
      username: id_username,
      password: id_password
    }
  }

  public getUsername(): string {
    return this.Login.username
  }
  public getPassword(): string {
    return this.Login.password
  }
}
const loginPage = new LoginPage()
Object.freeze(loginPage)
export default loginPage
