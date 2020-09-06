import entry from './entry'
import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  try {
    await entry(page).catch(err => console.error(err))
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }
})()
