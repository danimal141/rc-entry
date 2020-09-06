import puppeteer from 'puppeteer'

import entry from './entry'
import login from './login'
import User from './models/User'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  // const username = process.env.EMAIL
  // const password = process.env.PASSWORD
  // if (username == null || password == null) {
  //   console.error('Environment variables: EMAIL and PASSWORD must be specified')
  //   process.exit(1)
  // }
  const user: User = {
    username: process.env.EMAIL,
    password: process.env.PASSWORD
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
