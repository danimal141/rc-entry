import puppeteer from 'puppeteer'

import entry from './entry'
import login from './login'
import options from './options'
import User from './models/User'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  const user: User = {
    username: options.username,
    password: options.password
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
