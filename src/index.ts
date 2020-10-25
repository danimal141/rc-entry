import puppeteer from 'puppeteer'

import entry from './entry'
import login from './login'
import options from './options'
import User from './models/User'

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 20 })
  const page = await browser.newPage()

  const user: User = {
    username: options.username || process.env.RC_USER,
    password: options.password || process.env.RC_PASS
  }

  try {
    const cookies = await login(page, user)
    await entry(page, cookies)
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }
})()
