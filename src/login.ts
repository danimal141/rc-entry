import { Page, Cookie } from 'puppeteer'

const LOGIN_URL = 'https://grp02.id.rakuten.co.jp/rms/nid/login'

const LOGIN_USERNAME_ID = '#loginInner_u'
const LOGIN_PASSWORD_ID = '#loginInner_p'
const LOGIN_BUTTON_CLASS = '.loginButton'

export default async function login(page: Page): Promise<Cookie[]> {
  const username = process.env.EMAIL
  const password = process.env.PASSWORD
  if (username == null || password == null) {
    console.error('Environment variables: EMAIL and PASSWORD must be specified')
    process.exit(1)
  }

  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded' })

  await page.type(LOGIN_USERNAME_ID, username)
  await page.type(LOGIN_PASSWORD_ID, password)
  await page.click(LOGIN_BUTTON_CLASS)

  await page.waitForNavigation({ timeout: 10000, waitUntil: 'domcontentloaded' })
  await page.waitFor(1000) // Behave naturally

  const cookies =  await page.cookies()
  return cookies
}
