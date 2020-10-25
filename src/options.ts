import * as yargs from 'yargs'

const options = yargs
  .options('username', {
    alias: 'u',
    type: 'string',
    description: 'Your username'
  })
  .options('password', {
    alias: 'p',
    type: 'string',
    description: 'Your password'
  })
  .help()
  .argv

export default options
