import { Page, Cookie } from 'puppeteer'

import User from './models/User'

const LOGIN_URL = 'https://grp02.id.rakuten.co.jp/rms/nid/login'
const LOGIN_USERNAME_ID = '#loginInner_u'
const LOGIN_PASSWORD_ID = '#loginInner_p'
const LOGIN_BUTTON_CLASS = '.loginButton'

export default async function login(page: Page, user: User): Promise<Cookie[]> {
  await page.goto(LOGIN_URL, { timeout: 30000, waitUntil: 'domcontentloaded' })

  await page.type(LOGIN_USERNAME_ID, user.username)
  await page.type(LOGIN_PASSWORD_ID, user.password)
  await page.click(LOGIN_BUTTON_CLASS)

  const cookies =  await page.cookies()
  return cookies
}
