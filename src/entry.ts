import { Cookie, Page } from 'puppeteer'

const ENTRY_URL = 'https://event.rakuten.co.jp/campaign/card/pointday/'

export const TARGET_BUTTON_CLASS = '.rcEntryButton-button'

export default async function entry(page: Page, cookies: Cookie[]) {
  for (const cookie of cookies) { await page.setCookie(cookie) }

  await page.goto(ENTRY_URL, { timeout: 30000, waitUntil: 'domcontentloaded' })

  if (await page.$(TARGET_BUTTON_CLASS) == null) {
    console.log('There seems to be no campaign held now')
    process.exit(0)
  }
  await page.click(TARGET_BUTTON_CLASS)
  await page.waitForNavigation({ timeout: 30000, waitUntil: 'domcontentloaded' })
}
