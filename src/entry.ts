import login from './login'
import puppeteer from 'puppeteer'

const ENTRY_URL = 'https://event.rakuten.co.jp/campaign/card/pointday/'

export default async function entry() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  const cookies = await login()
  for (const cookie of cookies) { await page.setCookie(cookie) }

  await page.goto(ENTRY_URL, { waitUntil: 'domcontentloaded' })

  page.click('.riCheckEntryMulti__noLoginButton')
  await page.waitForNavigation({ timeout: 30000, waitUntil: 'domcontentloaded' })

  await page.screenshot({ path: 'entry-finished.png' })
  browser.close()
}
