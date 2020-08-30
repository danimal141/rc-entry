import puppeteer from 'puppeteer'

const LOGIN_URL = 'https://grp02.id.rakuten.co.jp/rms/nid/login'

export default async function login(): Promise<puppeteer.Cookie[]> {
  const username = process.env.EMAIL
  const password = process.env.PASSWORD
  if (username == null || password == null) {
    console.error('username and password must be specified')
    process.exit(1)
  }

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  await page.goto(LOGIN_URL, { waitUntil: 'domcontentloaded' })

  await page.type('#loginInner_u', username)
  await page.type('#loginInner_p', password)
  page.click('.loginButton')

  await page.waitForNavigation({ timeout: 30000, waitUntil: 'domcontentloaded' })
  const cookies =  await page.cookies()
  browser.close()
  return cookies
}
