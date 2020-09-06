import { Cookie, Page } from 'puppeteer'

const ENTRY_URL = 'https://event.rakuten.co.jp/campaign/card/pointday/'

export const TARGET_BUTTON_CLASS = '.riCheckEntryMulti__noLoginButton'

export default async function entry(page: Page, cookies: Cookie[]) {
  for (const cookie of cookies) { await page.setCookie(cookie) }

  await page.waitFor(1000) // Behave naturally
  await page.goto(ENTRY_URL, { timeout: 10000, waitUntil: 'domcontentloaded' })

  if (await page.$(TARGET_BUTTON_CLASS) == null) {
    console.error('There seems to be no campaign held now')
    process.exit(1)
  }
  await page.click(TARGET_BUTTON_CLASS)
  await page.waitForNavigation({ timeout: 30000, waitUntil: 'domcontentloaded' })

  await page.waitFor(1000) // Behave naturally
  await page.screenshot({ path: 'finished.png' })
}
