import login, {
  LOGIN_USERNAME_ID,
  LOGIN_PASSWORD_ID,
  LOGIN_BUTTON_CLASS
} from './login'
import User from './models/User'

describe('login', () => {
  it('should fill in the forms and click the login button', async () => {
    const dummyUser: User = { username: 'some-user@some-domain.com', password: 'some-pass' }

    await login(page, dummyUser)
    await expect(page).toFill(LOGIN_USERNAME_ID, dummyUser.username)
    await expect(page).toFill(LOGIN_PASSWORD_ID, dummyUser.password)
    await expect(page).toClick(LOGIN_BUTTON_CLASS)
  }, 30000)
})
